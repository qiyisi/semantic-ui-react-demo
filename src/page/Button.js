import React from "react";
import { Button, Icon, Label } from "semantic-ui-react";

import Wrapper from "../component/Wrapper";

const ButtonExample = () => (
  <>
    <Wrapper>
      <Button>Click Here</Button>
    </Wrapper>
    <Wrapper>
      <Button content="Click Here" />
    </Wrapper>
    <Wrapper>
      <Button primary>Primary</Button>
      <Button secondary>Secondary</Button>
    </Wrapper>
    <Wrapper>
      <Button content="Primary" primary />
      <Button content="Secondary" secondary />
    </Wrapper>
    <Wrapper>
      <Button animated>
        <Button.Content visible>Next</Button.Content>
        <Button.Content hidden>
          <Icon name="arrow right"></Icon>
        </Button.Content>
      </Button>
      <Button animated="vertical">
        <Button.Content hidden>Shop</Button.Content>
        <Button.Content visible>
          <Icon name="shop" />
        </Button.Content>
      </Button>
      <Button animated="fade">
        <Button.Content visible>Sign-up for a Pro account</Button.Content>
        <Button.Content hidden>$12.99 a month</Button.Content>
      </Button>
    </Wrapper>
    <Wrapper>
      <Button as="div" labelPosition="right">
        <Button icon>
          <Icon name="heart" />
          Like
        </Button>
        <Label as="a" basic pointing="left">
          2,048
        </Label>
      </Button>
      <Button as="div" labelPosition="left">
        <Label as="a" basic pointing="right">
          2,048
        </Label>
        <Button icon>
          <Icon name="heart" />
          Like
        </Button>
      </Button>
      <Button as="div" labelPosition="left">
        <Label as="a" basic>
          2,048
        </Label>
        <Button icon>
          <Icon name="fork" />
        </Button>
      </Button>
    </Wrapper>
    <Wrapper>
      <Button
        content="Like"
        icon="heart"
        label={{ as: "a", basic: true, content: "2,048" }}
        labelPosition="right"
      />
      <Button
        content="Like"
        icon="heart"
        label={{ as: "a", basic: true, pointing: "right", content: "2,048" }}
        labelPosition="left"
      />
      <Button
        icon="fork"
        label={{ as: "a", basic: true, content: "2,048" }}
        labelPosition="left"
      />
    </Wrapper>
  </>
);

export default ButtonExample;
