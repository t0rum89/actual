import { validationMethods } from "./validationMethods";

export const validationSchema = {
  username: [
    validationMethods.required("Username is required"),
    validationMethods.min(3, "The username must be longer than 3"),
    validationMethods.max(12, "The username must be shorter than 12"),
  ],
  email: [
    validationMethods.required("Email is required"),
    validationMethods.email("Wrong email"),
  ],
  password: [
    validationMethods.required("Password is required"),
    validationMethods.min(6, "Password must be longer than 6"),
    validationMethods.max(10, "Password must be shorter than 10"),
  ],
  password2: [
    validationMethods.required("Password 2 is required"),
    validationMethods.match(
      "password",
      "password2",
      "Passwords should be the same"
    ),
  ],
};
