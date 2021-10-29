import PlayerList from "../components/PlayersList";
import Button from "../components/Button";
import styled from "styled-components";

const MATCH_PLAYERS = [
  "Sera",
  "Rubio",
  "Jorge",
  "German",
  "Herni",
  "agus ham",
  "matias",
  "Gonzalo",
  "Gaspar",
  "Tin",
  "Fran",
  "Matias",
  "Damián",
  "Lucas"
];

const Index = () => {
  return (
    <Container>
      <Button>Shuffle</Button>
      <PlayerList />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 1rem;
`;

export default Index;
