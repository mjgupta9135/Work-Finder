import { z } from "zod";

export const companyRegisterValidaton = z.object({
  name: z.string({
    message: "Company Name Must be string",
  }),
  description: z.string().optional(),
  website: z
    .string()
    .url({
      message: "Please Provide valid url",
    })
    .optional(),
  location: z.string().optional(),
});

export const updateCompanyValidation = z.object({
  name: z.string({
    message: "Company Name Must be string",
  }),
  description: z.string().optional(),
  website: z
    .string()
    .url({
      message: "Please Provide valid url",
    })
    .optional(),
  location: z.string().optional(),
});
