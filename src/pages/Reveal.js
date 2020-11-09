import React from "react";
import { Image, Reveal } from "semantic-ui-react";
import Wrapper from "../components/Wrapper";

const RevealExampleFade = () => (
  <>
    <Wrapper>
      <Reveal animated="fade">
        <Reveal.Content visible>
          <Image src="/images/wireframe/square-image.png" size="small" />
        </Reveal.Content>
        <Reveal.Content hidden>
          <Image src="./cat.jpg" size="small" />
        </Reveal.Content>
      </Reveal>
    </Wrapper>
  </>
);

export default RevealExampleFade;
