import React from "react";
import styled from "@emotion/styled/macro";

const PokemonList: React.FC = () => {
  const imageUrl = (index: number): string =>
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index}.png`;
  return (
    <Base>
      <List>
        <ListItem>
          <Image src={imageUrl(1)} />
          <Name>bulbasaur</Name>
          <Index>#001</Index>
        </ListItem>
      </List>
    </Base>
  );
};

export default PokemonList;

const Base = styled.section`
  margin-top: 21px;
`;

const List = styled.ul``;

const ListItem = styled.li`
  display: flex;
  position: relative;
  list-style: none;
  align-items: center;
  box-shadow: 6px 4px 14px 5px rgba(0, 0, 0, 0.2);
  border-radius: 12px;
  & + & {
    // listItem 마다 margin-top을 갖는다
    margin-top: 18px;
  }
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
`;

const Name = styled.p`
  padding: 0 0 0 12px;
  flex: 1 1;
  color: #374151;
  text-transform: capitalize; // 첫번째 글자 대문자
  font-size: 16px;
  font-weight: bold;
`;

const Index = styled.p`
  position: absolute;
  right: 16px;
  font-size: 24px;
  font-weight: bold;
  color: #d1d5db;
`;
