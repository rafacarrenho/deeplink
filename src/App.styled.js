import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.textarea`
  padding: 8px;
  width: 450px;
  max-width: 85vw;
  margin: auto;
  margin-bottom: 20px;
`;

const ButtonModifier = {
  disabled: () => css`
    background-color: grey;
    cursor: not-allowed;
  `,
};

export const Button = styled.button`
  ${({ disabled }) => css`
    border-radius: 5px;
    width: 200px;
    padding: 12px;
    margin: auto;
    background-color: red;
    color: white;
    text-decoration: none;
    border: none;
    transition: 0.3s ease;

    ${disabled && ButtonModifier.disabled}
  `}
`;
