import React from "react";

import styled from "styled-components";

import { useTranslation } from "react-i18next";

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    color: SlateGray;
    margin-top: 15px;
    margin-bottom: 15px;
  }
  p {
    color: SlateGray;
  }
`;

const Home = () => {
  const { t } = useTranslation("common");
  return (
    <>
      <HomeWrapper>
        <h1>{t("home.title")}</h1>
        <p>{t("home.description")}</p>
      </HomeWrapper>
    </>
  );
};

export default Home;
