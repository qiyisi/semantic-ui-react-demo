import React from "react";
import { Message } from "semantic-ui-react";
import Wrapper from "../components/Wrapper";

const MessageExample = () => (
  <>
    <Wrapper>
      <Message>
        <Message.Header>Changes in Service</Message.Header>
        <p>
          We updated our privacy policy here to better service our customers. We
          recommend reviewing the changes.
        </p>
      </Message>
    </Wrapper>
  </>
);

export default MessageExample;
