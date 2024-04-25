import styled, { css } from "styled-components";

const sizes = {
  small: css`
    font-size: 1.2rem;
    padding: 0.4rem 0.8rem;
    text-transform: uppercase;
    font-weight: 600;
    text-align: center;
  `,
  medium: css`
    font-size: 1.4rem;
    padding: 1.2rem 1.6rem;
    font-weight: 500;
  `,
  large: css`
    font-size: 1.6rem;
    padding: 1.2rem 2.4rem;
    font-weight: 500;
  `,
};

const variations = {
  // primary: css`
  //   color: #0a101a;
  //   background-color: rgb(59, 237, 178) !important;
  // `,
  primary: css`
    color: var(--color-secondary);
    background-color: var(--color-main) !important;
  `,
  // secondary: css`
  //   color: rgb(59, 237, 178);
  //   background-color: rgba(59, 237, 178, 0.15);
  //   /* border: 1px solid var(--color-grey-200); */

  //   &:hover {
  //     background-color: rgba(59, 237, 178, 0.1);
  //   }
  // `,

  secondary: css`
    color: var(--color-main);
    background-color: var(--color-secondary-2);
    border: 1px solid transparent;

    &:hover {
      background-color: transparent;
      border: 1px solid var(--color-secondary-2);
    }
  `,
  danger: css`
    color: var(--color-red-100);
    background-color: var(--color-red-700);

    &:hover {
      background-color: var(--color-red-800);
    }
  `,
};

const Button = styled.button`
  border: none;
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-sm);

  &:focus {
    border: none;
    outline: none;
  }
  ${(props) => sizes[props.size]}
  ${(props) => variations[props.variation]}
`;

Button.defaultProps = {
  variation: "primary",
  size: "medium",
};

export default Button;
