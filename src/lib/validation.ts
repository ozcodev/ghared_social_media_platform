// we use zod packecge for inputs validation

import { z } from "zod";
const requiredString = z.string().trim().min(1, "Required");

export const signUpShema = z.object({
  email: requiredString.email("Invalid email adress"),
  username: requiredString.regex(
    /^[a-zA-Z0-9_-]+$/,
    "Only letters, number, and - _ allowed",
  ),
  password: requiredString.min(8, "Must be at least 8 charactres"),
});

export type signUpValues = z.infer<typeof signUpShema>;

export const loginShema = z.object({
    username: requiredString,
    password: requiredString,
});

export type loginValues = z.infer<typeof loginShema>;