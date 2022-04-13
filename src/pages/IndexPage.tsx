// 포켓몬 목록 페이지
import React from "react";
import styled from "@emotion/styled";
import PokemonList from "../components/PokemonList";

const IndexPage: React.FC = () => {
  return (
    <Base>
      <PokemonList />
    </Base>
  );
};

export default IndexPage;

const Base = styled.div``;
