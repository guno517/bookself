import React from "react";
import styled from "@emotion/styled";

const PokemonItem: React.FC = () => {
  return (
    <Main>
      <ImgBox></ImgBox>
      <TextBox></TextBox>
    </Main>
  );
};

export default PokemonItem;

const Main = styled.div``;

const ImgBox = styled.div``;

const TextBox = styled.div``;
