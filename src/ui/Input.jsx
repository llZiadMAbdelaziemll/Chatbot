import styled from "styled-components";

const Input = styled.input`
  background-color: var(--color-content-bg);
  border-radius: var(--border-radius-sm);
  padding: 10px 110px 10px 30px;
  box-shadow: var(--shadow-sm);
  color: var(--color-content-text);
  font-weight: 400;
  font-size: 20px;
  width: 100%;
  height: 6rem;
  outline: none;
  border: none;
  &:focus {
    outline: none;
    border: none;
  }
`;

export default Input;
