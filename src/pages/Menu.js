import React from "react";
import { Menu } from "semantic-ui-react";
import Wrapper from "../components/Wrapper";

const items = [
  { key: "editorials", active: true, name: "Editorials" },
  { key: "review", name: "Reviews" },
  { key: "events", name: "Upcoming Events" },
];

const MenuExample = () => (
  <>
    <Wrapper>
      <Menu items={items} />
    </Wrapper>
  </>
);

export default MenuExample;
