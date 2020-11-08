import React from "react";
import { Divider } from "semantic-ui-react";

const Wrapper = (props) => (
  <div style={{ margin: "14px" }}>
    {props.children}
    <Divider />
  </div>
);

export default Wrapper;
