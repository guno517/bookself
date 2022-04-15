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
    <ListWrapper>
      <ListItem>About</ListItem>
      <ListItem>Stats</ListItem>
      <ListItem>Evolution</ListItem>
    </ListWrapper>
  );
};

export default Tabs;

const ListWrapper = styled.ul;

const ListItem = styled.li``;
