import { StyledButton } from "./Button.styled";

const Button = ({ children, ...props }) => {
  return (
    <StyledButton {...props}>
      <span class="shadow"></span>
      <span class="edge"></span>
      <span class="front">{children}</span>
    </StyledButton>
  );
};

export default Button;
