import React from "react";

import styled from "styled-components";

const ButtonWrapper = styled.button`
  margin-bottom: 10px;
  height: 30px;
  width: 20%;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  padding: 4px 8px;
  background: ${(props) =>
    props.green ? "rgba(107,255,3,0.5)" : "rgba(87,198,255,0.5)"};
  box-shadow: 1px 1px 50px #000;
  transition: all 0.2s ease-in-out;
  &:hover{
    opacity: 0.7;
  }
}
`;

const Button = (props) => {
  return <ButtonWrapper {...props} />;
};

export default Button;
