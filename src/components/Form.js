import React from "react";

import styled from "styled-components";

const FormWrapper = styled.form`
  padding: 15px;
  margin-bottom: 10px;
  width: 20%;
  border-radius: 5px;
  background: rgba(3, 3, 3, 0.3);
  box-shadow: 1px 1px 50px #000;
`;

const Form = ({ children, ...props }) => {
  return <FormWrapper {...props}>{children}</FormWrapper>;
};

export default Form;
