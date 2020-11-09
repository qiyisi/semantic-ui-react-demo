import React from "react";
import {
  Button,
  Divider,
  Form,
  Grid,
  Segment,
  Input,
  Table,
  Header,
  Icon,
} from "semantic-ui-react";
import Wrapper from "../components/Wrapper";

const DividerExample = () => (
  <>
    <Wrapper>
      <Segment placeholder>
        <Grid columns={2} relaxed="very" stackable>
          <Grid.Column>
            <Form>
              <Form.Input
                icon="user"
                iconPosition="left"
                label="Username"
                placeholder="Username"
              />
              <Form.Input
                icon="lock"
                iconPosition="left"
                label="Password"
                type="password"
              />

              <Button content="Login" primary />
            </Form>
          </Grid.Column>

          <Grid.Column verticalAlign="middle">
            <Button content="Sign up" icon="signup" size="big" />
          </Grid.Column>
        </Grid>

        <Divider vertical>Or</Divider>
      </Segment>
    </Wrapper>
    <Wrapper>
      <Segment basic textAlign="center">
        <Input
          action={{ color: "blue", content: "Search" }}
          icon="search"
          iconPosition="left"
          placeholder="Order #"
        />

        <Divider horizontal>Or</Divider>

        <Button
          color="teal"
          content="Create New Order"
          icon="add"
          labelPosition="left"
        />
      </Segment>
    </Wrapper>
    <Wrapper>
      <Divider horizontal>
        <Header as="h4">
          <Icon name="tag" />
          Description
        </Header>
      </Divider>

      <p>
        Doggie treats are good for all times of the year. Proven to be eaten by
        99.9% of all dogs worldwide.
      </p>

      <Divider horizontal>
        <Header as="h4">
          <Icon name="bar chart" />
          Specifications
        </Header>
      </Divider>

      <Table definition>
        <Table.Body>
          <Table.Row>
            <Table.Cell width={2}>Size</Table.Cell>
            <Table.Cell>1" x 2"</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Weight</Table.Cell>
            <Table.Cell>6 ounces</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Color</Table.Cell>
            <Table.Cell>Yellowish</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Odor</Table.Cell>
            <Table.Cell>Not Much Usually</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </Wrapper>
  </>
);

export default DividerExample;
