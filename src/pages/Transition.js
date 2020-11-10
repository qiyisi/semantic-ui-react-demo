import React from "react";
import { Transition, Button, Divider, Image } from "semantic-ui-react";
import Wrapper from "../components/Wrapper";

const TransitionExample = () => {
  const [visible, setVisible] = React.useState(true);
  const toggleVisibility = () => {
    setVisible(!visible);
  };
  return (
    <>
      <Wrapper>
        <Button
          content={visible ? "Hide" : "Show"}
          onClick={toggleVisibility}
        />
        <Divider hidden />
        <Transition visible={visible} animation="scale" duration={500}>
          <Image size="small" src="./cat.jpg" />
        </Transition>
      </Wrapper>
    </>
  );
};

export default TransitionExample;
