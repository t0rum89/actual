import React, { useContext } from "react";
import Form from "../components/Form";
import Input from "../components/Input";
import Button from "../components/Button";

import { MyContext, MyContextProvider } from "../DataContext";

import styled from "styled-components";
import { validationSchema } from "../schemaForRegistration";

import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const RegistrationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    color: SlateGray;
    margin-top: 15px;
    margin-bottom: 15px;
  }
`;

const Registration = () => {
  const { values, setValue, errors, buttonHandler } = useContext(MyContext);
  const handleChange = (e) => setValue(e.target.name, e.target.value);
  const navigate = useNavigate();
  const { t } = useTranslation("common");
  return (
    <>
      <RegistrationWrapper>
        <h1>{t("registration.title")}</h1>
        <Form>
          <Input
            value={values.username}
            text={t("registration.fields.username.name")}
            type="text"
            placeholder={t("registration.fields.username.placeholder")}
            name="username"
            description={errors.username}
            onChange={handleChange}
            error={!!errors.username}
          />
          <Input
            value={values.email}
            text={t("registration.fields.email.name")}
            type="email"
            placeholder={t("registration.fields.email.placeholder")}
            name="email"
            description={errors.email}
            error={!!errors.email}
            onChange={handleChange}
          />
          <Input
            value={values.password}
            text={t("registration.fields.password.name")}
            type="password"
            placeholder={t("registration.fields.password.placeholder")}
            name="password"
            description={errors.password}
            error={!!errors.password}
            onChange={handleChange}
          />
          <Input
            value={values.password2}
            text={t("registration.fields.password2.name")}
            type="password"
            placeholder={t("registration.fields.password2.placeholder")}
            name="password2"
            description={errors.password2}
            onChange={handleChange}
            error={!!errors.password2}
          />
        </Form>
        <Button green onClick={buttonHandler}>
          {t("buttons.registration")}
        </Button>
        <Button onClick={() => navigate("/login")}>
          {t("buttons.goToLogin")}
        </Button>
      </RegistrationWrapper>
    </>
  );
};

const RegistrationContainer = (props) => {
  const initialValues = {
    username: "",
    email: "",
    password: "",
    password2: "",
  };
  return (
    <MyContextProvider
      initialValues={initialValues}
      validationSchema={validationSchema}
    >
      <Registration {...props} />
    </MyContextProvider>
  );
};

export default RegistrationContainer;
