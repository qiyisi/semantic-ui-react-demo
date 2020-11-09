import React from "react";
import { Header, Icon, Segment } from "semantic-ui-react";
import Wrapper from "../components/Wrapper";

const HeaderExample = () => (
  <>
    <Wrapper>
      <Header as="h1">First Header</Header>
      <Header as="h2">Second Header</Header>
      <Header as="h3">Third Header</Header>
      <Header as="h4">Fourth Header</Header>
      <Header as="h5">Fifth Header</Header>
      <Header as="h6">Sixth Header</Header>
    </Wrapper>
    <Wrapper>
      <Header size="huge">Huge Header</Header>
      <Header size="large">Large Header</Header>
      <Header size="medium">Medium Header</Header>
      <Header size="small">Small Header</Header>
      <Header size="tiny">Tiny Header</Header>
    </Wrapper>
    <Wrapper>
      <Header as="h2" icon>
        <Icon name="settings" />
        Account Settings
        <Header.Subheader>
          Manage your account settings and set e-mail preferences.
        </Header.Subheader>
      </Header>
    </Wrapper>
    <Wrapper>
      <Header as="h2" icon textAlign="center">
        <Icon name="users" circular />
        <Header.Content>Friends</Header.Content>
      </Header>
    </Wrapper>
    <Wrapper>
      <Header sub>Price</Header>
      <span>$10.99</span>
    </Wrapper>
    <Wrapper>
      <Segment inverted>
        <Header as="h4" inverted color="red">
          Red
        </Header>
      </Segment>
    </Wrapper>
  </>
);

export default HeaderExample;
