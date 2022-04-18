import React from "react";
import styled from "@emotion/styled";
import { Color } from "../types";
import { mapColorToHex } from "../utils";

interface ITabs {
  tab: "about" | "stats" | "evolution";
  onClick: (tab: "about" | "stats" | "evolution") => void;
  color?: Color;
}

const Tabs: React.FC<ITabs> = ({ tab, onClick, color }) => {
  return (
    <List>
      <ListItem onClick={() => onClick("about")}>
        <TabBtn active={tab === "about"} color={mapColorToHex(color?.name)}>
          About
        </TabBtn>
      </ListItem>
      <ListItem onClick={() => onClick("stats")}>
        <TabBtn active={tab === "stats"} color={mapColorToHex(color?.name)}>
          Stats
        </TabBtn>
      </ListItem>
      <ListItem onClick={() => onClick("evolution")}>
        <TabBtn active={tab === "evolution"} color={mapColorToHex(color?.name)}>
          Evolution
        </TabBtn>
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

const TabBtn = styled.button<{ active?: boolean; color: string }>`
  border-radius: 8px;
  box-shadow: 6px 4px 14px 5px rgba(0, 0, 0, 0.21);
  padding: 6px 12px;
  background-color: white;
  border: none;
  font-size: 16px;
  color: ${({ active, color }) => (active ? color : "#6B7280")};
`;
