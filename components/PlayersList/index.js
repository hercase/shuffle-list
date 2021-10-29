import styled from "styled-components";

const PlayersList = () => {
  return (
    <StyledContainer>
      <StyledCard>Card #1</StyledCard>
      <StyledCard>Card #2</StyledCard>
      <StyledCard>Card #3</StyledCard>
      <StyledCard>Card #4</StyledCard>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
`;

const StyledCard = styled.div`
  color: #6c6284;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  box-shadow: 0 1px 1px hsl(0deg 0% 0% / 0.075),
    0 2px 2px hsl(0deg 0% 0% / 0.075), 0 4px 4px hsl(0deg 0% 0% / 0.075),
    0 8px 8px hsl(0deg 0% 0% / 0.075), 0 16px 16px hsl(0deg 0% 0% / 0.075);
  background-color: #f1faee;
`;

export default PlayersList;
