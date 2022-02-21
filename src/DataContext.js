import React, { useState } from "react";
import { useTranslation } from "react-i18next";

export const MyContext = React.createContext({});

const Provider = ({ children, initialValues = {}, validationSchema = {} }) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const { t } = useTranslation("common");

  const setValue = (name, value) => {
    setValues({ ...values, [name]: value });
  };

  const validation = () => {
    const invalidFields = {};

    Object.keys(validationSchema).forEach((key) => {
      const fieldConfig = validationSchema[key];
      if (!!fieldConfig) {
        for (let i = 0; i < fieldConfig.length; i++) {
          const rule = fieldConfig[i];
          const { errorText, valid } = rule(values[key], values);
          if (!valid) {
            invalidFields[key] = errorText;
            break;
          }
        }
      }
    });

    setErrors(invalidFields);
    return invalidFields;
  };

  const validate = (callback) => {
    const validationResult = validation();
    const isValid = Object.keys(validationResult).length === 0;
    setIsValid(isValid);
    callback(isValid, validationResult);
  };

  const buttonHandler = () => {
    validate((isValid, errors2) => {
      isValid === true ? alert(t("success")) : alert(t("failure"));
      console.log(isValid, errors2);
    });
    console.log(values);
  };

  return (
    <MyContext.Provider
      value={{
        values,
        setValues,
        errors,
        setErrors,
        setValue,
        isValid,
        setIsValid,
        validate,
        validation,
        buttonHandler,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export const MyContextProvider = Provider;
