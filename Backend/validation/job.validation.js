import { z } from "zod";
export const jobPostValidation = z.object({
  title: z.string({
    message: "Title should be string",
  }),
  description: z.string({
    message: "Description Must be string",
  }),
  companyId: z.string({
    message: "Company Must be Provided",
  }),
  requirements: z.string({
    message: "Description Must be string",
  }),
  salary: z.number({
    message: "Salary Must be Number",
  }),
  location: z.string({
    message: "location Must be string",
  }),
  jobType: z.string({
    message: "JobType Must be string",
  }),
  experience: z
    .number({
      message: "Experience Must be Number",
    })
    .min(1, {
      message: "Expreience must have some value",
    }),
  position: z
    .number({
      message: "Position Must be Number",
    })
    .min(1, {
      message: "Position must have some value",
    }),
});
