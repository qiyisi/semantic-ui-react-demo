import React from "react";
import { Dimmer, Image, Segment } from "semantic-ui-react";
import Wrapper from "../components/Wrapper";

const src = "./cat.jpg";

const DimmerExample = () => (
  <>
    <Wrapper>
      <Segment>
        <Dimmer active />
        <p>
          <Image src={src} />
        </p>
      </Segment>
    </Wrapper>
  </>
);

export default DimmerExample;
