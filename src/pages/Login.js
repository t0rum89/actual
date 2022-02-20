import React, { useContext } from "react";
import Form from "../components/Form";
import Input from "../components/Input";
import Button from "../components/Button";

import { MyContext, MyContextProvider } from "../DataContext";

import styled from "styled-components";
import { validationSchema } from "../schemaForLogin";
import { Link } from "react-router-dom";

import { useTranslation } from "react-i18next";

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    margin-top: 15px;
    margin-bottom: 15px;
  }

  input {
    margin-bottom: 15px;
  }
`;

const Login = () => {
  const { values, setValue, errors, buttonHandler } = useContext(MyContext);
  const handleChange = (e) => setValue(e.target.name, e.target.value);

  const { t } = useTranslation("common");

  return (
    <>
      <LoginWrapper>
        <h1>{t("login.title")}</h1>
        <Form>
          <Input
            value={values.email}
            text={t("login.fields.email.name")}
            type="email"
            placeholder={t("login.fields.email.placeholder")}
            name="email"
            description={errors.email}
            onChange={handleChange}
            error={!!errors.email}
          />
          <Input
            value={values.password}
            text={t("login.fields.password.name")}
            type="password"
            placeholder={t("login.fields.password.placeholder")}
            name="password"
            description={errors.password}
            onChange={handleChange}
            error={!!errors.password}
          />
        </Form>
        <Button text={t("buttons.login")} onClick={buttonHandler} />
        <Link to="/registration">
          <Button text={t("buttons.goToReg")} />
        </Link>
      </LoginWrapper>
    </>
  );
};

const LoginContainer = (props) => {
  const initialValues = {
    email: "",
    password: "",
  };
  return (
    <MyContextProvider
      initialValues={initialValues}
      validationSchema={validationSchema}
    >
      <Login {...props} />
    </MyContextProvider>
  );
};

export default LoginContainer;
