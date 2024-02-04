import * as z from "zod";

export const userValidation = z.object({
  profile_photo: z.string().url().min(1),
  name: z.string().min(3).max(30), //here we can provide error msg by min(3,{message:"min length req is 3"})
  username: z.string().min(3).max(30),

  bio: z.string().min(3).max(1000),
});
