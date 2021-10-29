import styled from "styled-components";

export const StyledButton = styled.div`
  position: relative;
  background: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
  width: fit-content;

  .shadow {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 4px;
    background: hsl(0deg 0% 0% / 0.25);
    transform: translateY(2px);
  }
  .edge {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 4px;
    background: hsl(340deg 100% 32%);
  }
  .front {
    display: block;
    position: relative;
    padding: 12px 42px;
    border-radius: 4px;
    font-size: 1.25rem;
    color: white;
    background: hsl(345deg 100% 47%);
    transform: translateY(-4px);
  }

  &:hover .front {
    transform: translateY(-6px);
  }
  &:hover .shadow {
    transform: translateY(4px);
  }
  &:active .front {
    transform: translateY(-2px);
  }
  &:active .shadow {
    transform: translateY(1px);
  }

  &:focus:not(:focus-visible) {
    outline: none;
  }
`;
