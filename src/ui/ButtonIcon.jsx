import styled from "styled-components";

const ButtonIcon = styled.button`
  background: none;
  border: none;
  padding: 0.6rem;
  border-radius: var(--border-radius-sm);
  transition: all 0.2s;
  cursor: pointer;
  &:hover {
    background-color: rgba(59, 237, 178, 0.15);
  }

  & svg {
    width: 3rem;
    height: 3rem;
    color: var(--color-opposite);
  }
  &:focus {
    border: none;
    outline: none;
  }
`;

export default ButtonIcon;
