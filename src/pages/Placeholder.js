import React from "react";
import { Placeholder } from "semantic-ui-react";
import Wrapper from "../components/Wrapper";

const PlaceholderExample = () => (
  <>
    <Wrapper>
      <Placeholder>
        <Placeholder.Header image>
          <Placeholder.Line />
          <Placeholder.Line />
        </Placeholder.Header>
        <Placeholder.Paragraph>
          <Placeholder.Line />
          <Placeholder.Line />
          <Placeholder.Line />
          <Placeholder.Line />
        </Placeholder.Paragraph>
      </Placeholder>
    </Wrapper>
  </>
);

export default PlaceholderExample;
