import React from "react";
import styled from "@emotion/styled";
import { Color } from "../types";

interface ITabs {
  tab: "about" | "stats" | "evolution";
  onClick: (tab: "about" | "stats" | "evolution") => void;
  color?: Color;
}

const Tabs: React.FC<ITabs> = ({ tab, onClick, color }) => {
  return (
    <List>
      <ListItem active={tab === "about"} onClick={() => onClick("about")}>
        <TabBtn>About</TabBtn>
      </ListItem>
      <ListItem active={tab === "stats"} onClick={() => onClick("stats")}>
        <TabBtn>Stats</TabBtn>
      </ListItem>
      <ListItem
        active={tab === "evolution"}
        onClick={() => onClick("evolution")}
      >
        <TabBtn>Evolution</TabBtn>
      </ListItem>
    </List>
  );
};

export default Tabs;

const List = styled.ul`
  list-style: none;
  display: flex;
`;

const ListItem = styled.li<{ active?: boolean }>`
  & + & {
    margin-left: 16px;
  }
`;

const TabBtn = styled.button``;
