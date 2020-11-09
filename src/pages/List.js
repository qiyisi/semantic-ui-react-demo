import React from "react";
import { List } from "semantic-ui-react";
import Wrapper from "../components/Wrapper";

const ListExample = () => (
  <>
    <Wrapper>
      <List>
        <List.Item>Apples</List.Item>
        <List.Item>Pears</List.Item>
        <List.Item>Oranges</List.Item>
      </List>
    </Wrapper>
    <Wrapper>
      <List items={["Apples", "Pears", "Oranges"]} />
    </Wrapper>
    <Wrapper>
      <List>
        <List.Item>
          <List.Icon name="users" />
          <List.Content>Sematic UI</List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name="marker" />
          <List.Content>New York, NY</List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name="mail" />
          <List.Content>
            <a href="mailto:jack@semantic-ui.com">jack@semantic-ui.com</a>
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name="linkify" />
          <List.Content>
            <a href="http://www.semantic-ui.com">semantic-ui.com</a>
          </List.Content>
        </List.Item>
      </List>
    </Wrapper>
    <Wrapper>
      <List>
        <List.Item icon="users" content="Semantic UI" />
        <List.Item icon="marker" content="New York, NY" />
        <List.Item
          icon="mail"
          content={
            <a href="mailto:jack@semantic-ui.com">jack@semantic-ui.com</a>
          }
        />
        <List.Item
          icon="linkify"
          content={<a href="http://www.semantic-ui.com">semantic-ui.com</a>}
        />
      </List>
    </Wrapper>
    <Wrapper>
      <List divided relaxed>
        <List.Item>
          <List.Icon name="github" size="large" verticalAlign="middle" />
          <List.Content>
            <List.Header as="a">Semantic-Org/Semantic-UI</List.Header>
            <List.Description as="a">Updated 10 mins ago</List.Description>
          </List.Content>
        </List.Item>
      </List>
    </Wrapper>
  </>
);

export default ListExample;
