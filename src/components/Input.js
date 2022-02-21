import React from "react";
import styled from "styled-components";

const InputWrapper = styled.div`
  .error {
    color: black;
    margin-bottom: 10px;
    text-shadow: 0px 0px 15px rgba(255, 255, 255, 0.8);
  }
  .error::last-child {
    margin-bottom: 0px;
  }
  input {
    font-size: 16px;
    color: SlateGray;
    margin-bottom: 10px;
    width: 100%;
    height: 40px;
    padding: 8px;
    border: none;
    border-radius: 5px;
  }
  label {
    color: white;
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
    </InputWrapper>
  );
};

export default Input;
