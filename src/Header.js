import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "./components/Button";

import { useTranslation } from "react-i18next";

import english from "./assets/img/united_kingdom.png";
import french from "./assets/img/france.png";
import hebrew from "./assets/img/israel.png";

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: SlateGray;
  color: white;
  padding: 10px;
  // div {
  //   display: flex;
  //   justify-content: space-between;
  //   align-items: stretch;
  // }
  a {
    color: white;
    text-decoration: none;
    outline: none;
    margin-right: 40px;
    cursor: pointer;
  }

  a:last-child {
    margin-right: 0px;
  }
`;

const lngs = {
  en: { imgPath: english },
  fr: { imgPath: french },
  he: { imgPath: hebrew },
};

const Header = () => {
  const { t, i18n } = useTranslation("common");

  // const changeToLTR = () => {
  //   ("html").removeClass("direction-rtl").addClass("direction-ltr");
  // };

  // const changeToRTL = () => {
  //   ("html").removeClass("direction-ltr").addClass("direction-rtl");
  // };

  return (
    <>
      <HeaderWrapper>
        <div>
          <h1>{t("name")}</h1>
        </div>
        <div>
          {Object.keys(lngs).map((lng) => (
            <Button
              key={lng}
              style={{
                background: "transparent",
                boxShadow: "unset",
                marginRight: "10px",
              }}
              type="submit"
              onClick={() => i18n.changeLanguage(lng)}
            >
              <img src={lngs[lng].imgPath} alt="flag_img" />
            </Button>
          ))}
        </div>
        <div>
          <nav>
            <Link to="/">{t("links.home")}</Link>
            <Link to="/login">{t("links.login")}</Link>
            <Link to="/registration">{t("links.registration")}</Link>
          </nav>
        </div>
      </HeaderWrapper>
    </>
  );
};

export default Header;
