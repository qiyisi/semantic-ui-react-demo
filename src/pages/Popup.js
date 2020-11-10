import React from "react";
import { Button, Popup } from "semantic-ui-react";
import Wrapper from "../components/Wrapper";

const PopupExample = () => (
  <>
    <Wrapper>
      <Popup content="Add users to your feed" trigger={<Button icon="add" />} />
    </Wrapper>
  </>
);

export default PopupExample;
