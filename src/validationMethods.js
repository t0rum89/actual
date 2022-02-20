export const validationMethods = {
  required: (errorText) => (val) => ({
    errorText,
    valid: val?.length > 0,
  }),
  email: (errorText) => (val) => ({
    errorText,
    valid: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val),
  }),
  min: (min, errorText) => (val) => ({
    errorText,
    valid: val?.length >= min,
  }),
  max: (max, errorText) => (val) => ({
    errorText,
    valid: val?.length <= max,
  }),
  match: (stringOne, stringTwo, errorText) => (_, values) => ({
    errorText,
    valid: stringOne && stringTwo && values[stringOne] === values[stringTwo],
  }),
};
