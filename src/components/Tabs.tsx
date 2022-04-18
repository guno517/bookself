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
      <ListItem onClick={() => onClick("about")}>
        <TabBtn active={tab === "about"}>About</TabBtn>
      </ListItem>
      <ListItem onClick={() => onClick("stats")}>
        <TabBtn active={tab === "stats"}>Stats</TabBtn>
      </ListItem>
      <ListItem onClick={() => onClick("evolution")}>
        <TabBtn active={tab === "evolution"}>Evolution</TabBtn>
      </ListItem>
    </List>
  );
};

export default Tabs;

const List = styled.ul`
  list-style: none;
  display: flex;
`;

const ListItem = styled.li`
  & + & {
    margin-left: 16px;
  }
`;

const TabBtn = styled.button<{ active?: boolean }>``;
