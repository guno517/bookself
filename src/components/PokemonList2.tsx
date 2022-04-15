import React from "react";
import styled from "@emotion/styled/macro";
import { CgArrowsV } from "react-icons/cg";
import PokemonItem from "./PokemonItem";

const PokemonList: React.FC = () => {
  return (
    <Base>
      <DropDown>
        <CgArrowsV />
        도감번호 순서
      </DropDown>
      <PokeList>
        <PokeItemWrapper>
          <PokemonItem />
        </PokeItemWrapper>
      </PokeList>
    </Base>
  );
};

export default PokemonList;

const Base = styled.section`
  padding: 0 45px;
  margin: 45px 0;
`;

const DropDown = styled.div`
  float: right;
  width: 380px;
  border: 3px solid black;
  border-radius: 8px;
  padding: 10px;
  position: relative;
`;

const PokeList = styled.ul`
  list-style: none;
  clear: both;
  display: grid;
`;

const PokeItemWrapper = styled.li``;
