import React from "react";
import { Progress } from "semantic-ui-react";
import Wrapper from "../components/Wrapper";

const ProgressExample = () => (
  <>
    <Wrapper>
      <Progress percent={11} indicating></Progress>
    </Wrapper>
  </>
);

export default ProgressExample;
