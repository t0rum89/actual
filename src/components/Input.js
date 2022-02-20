import React from "react";
import styled from "styled-components";

const InputWrapper = styled.div`
  .error {
    color: red;
    margin-bottom: 10px;
  }
  input {
    height: 25px;
  }
`;

const Input = ({
  text,
  name,
  type,
  placeholder,
  onChange,
  error,
  description,
}) => {
  return (
    <InputWrapper>
      <>
        <label htmlFor={name}>
          <b>{text}</b>
        </label>
        <br />
        <input
          type={type}
          placeholder={placeholder}
          name={name}
          onChange={onChange}
        />
        {description && (
          <p className={`${error ? "error" : ""}`}>{description}</p>
        )}
      </>
    </InputWrapper>
  );
};

export default Input;
