import jwt from "jsonwebtoken";

const isAutheticated = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.staus(400).json({
        msg: "User not authenticated",
        success: false,
      });
    }

    const decode = await jwt.verify(token, process.env.SECRET_KEY);
    if (!decode) {
      res.status(400).json({
        msg: "Invalid Token",
        success: false,
      });
    }
    req.id = decode.userId;
    next();
  } catch (error) {
    console.log(err);
  }
};
export default isAutheticated;
