import { validationMethods } from "./validationMethods";

export const validationSchema = {
  email: [
    validationMethods.required("Email is required"),
    validationMethods.email("Wrong email"),
  ],
  password: [validationMethods.required("Password is required")],
};
