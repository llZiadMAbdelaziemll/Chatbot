import styled from "styled-components";

const Textarea = styled.textarea`
  padding: 0.8rem 1.2rem;
  border-radius: 5px;
  background-color: var(--color-content-bg);
  box-shadow: var(--shadow-sm);
  width: 100%;
  min-height: calc(1.5em + 0.75rem + 2px);
  color: var(--color-content-text);
  outline: none;
  border: none;
  &:focus {
    outline: none;
    border: none;
  }
`;

export default Textarea;
