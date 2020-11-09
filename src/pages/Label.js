import React from "react";
import {
  Icon,
  Label,
  Divider,
  Form,
  Input,
  Grid,
  Image,
  Segment,
  List,
  Menu,
} from "semantic-ui-react";
import Wrapper from "../components/Wrapper";

const src = "./cat.jpg";

const LabelExample = () => (
  <>
    <Wrapper>
      <Label>
        <Icon name="mail" /> 23
      </Label>
    </Wrapper>
    <Wrapper>
      <Label as="a" image>
        <img src={src} alt="" />
        Joe
      </Label>
    </Wrapper>
    <Wrapper>
      <Label as="a" color="blue" image>
        <img src={src} alt="" />
        Veronika
        <Label.Detail>Friend</Label.Detail>
      </Label>
    </Wrapper>
    <Wrapper>
      <Label image>
        <img src={src} alt="" />
        Adrienne
        <Icon name="delete" />
      </Label>
    </Wrapper>
    <Wrapper>
      <Form>
        <Form.Field>
          <input type="text" placeholder="First name" />
          <Label pointing>Please enter a value</Label>
        </Form.Field>
        <Divider />

        <Form.Field>
          <Label pointing="below">Please enter a value</Label>
          <input type="text" placeholder="Last Name" />
        </Form.Field>
        <Divider />

        <Form.Field inline>
          <input type="text" placeholder="Username" />
          <Label pointing="left">That name is taken!</Label>
        </Form.Field>
        <Divider />

        <Form.Field inline>
          <Label pointing="right">
            Your password must be 6 characters or more
          </Label>
          <input type="password" placeholder="Password" />
        </Form.Field>
      </Form>
    </Wrapper>
    <Wrapper>
      <Form>
        <Form.Field>
          <input type="text" placeholder="First name" />
          <Label basic color="red" pointing>
            Please enter a value
          </Label>
        </Form.Field>
        <Divider />

        <Form.Field>
          <Label basic color="red" pointing="below">
            Please enter a value
          </Label>
          <input type="text" placeholder="Last Name" />
        </Form.Field>
        <Divider />

        <Form.Field inline>
          <input type="text" placeholder="Username" />
          <Label basic color="red" pointing="left">
            That name is taken!
          </Label>
        </Form.Field>
        <Divider />

        <Form.Field inline>
          <Label basic color="red" pointing="right">
            Your password must be 6 characters or more
          </Label>
          <input type="password" placeholder="Password" />
        </Form.Field>
      </Form>
    </Wrapper>
    <Wrapper>
      <Form>
        <Form.Field>
          <Input placeholder="First name" />
          <Label pointing prompt>
            Please enter a value
          </Label>
        </Form.Field>
      </Form>
    </Wrapper>
    <Wrapper>
      <Grid columns={2}>
        <Grid.Column>
          <Image
            fluid
            label={{ as: "a", corner: "left", icon: "heart" }}
            src={src}
          />
        </Grid.Column>

        <Grid.Column>
          <Image
            fluid
            label={{ as: "a", color: "red", corner: "right", icon: "save" }}
            src={src}
          />
        </Grid.Column>
      </Grid>
    </Wrapper>
    <Wrapper>
      <Label as="a" tag>
        New
      </Label>
      <Label as="a" color="red" tag>
        Upcoming
      </Label>
      <Label as="a" color="teal" tag>
        Featured
      </Label>
    </Wrapper>
    <Wrapper>
      <Grid columns={2}>
        <Grid.Column>
          <Segment raised>
            <Label as="a" color="red" ribbon>
              Overview
            </Label>
            <span>Account Details</span>

            <Image src={src} />

            <Label as="a" color="blue" ribbon>
              Community
            </Label>
            <span>User Reviews</span>

            <Image src={src} />
          </Segment>
        </Grid.Column>

        <Grid.Column>
          <Segment>
            <Label as="a" color="orange" ribbon="right">
              Specs
            </Label>
            <Image src={src} />

            <Label as="a" color="teal" ribbon="right">
              Reviews
            </Label>
            <Image src={src} />
          </Segment>
        </Grid.Column>
      </Grid>
    </Wrapper>
    <Wrapper>
      <Grid columns={2}>
        <Grid.Column>
          <Image
            fluid
            label={{
              as: "a",
              color: "black",
              content: "Hotel",
              icon: "hotel",
              ribbon: true,
            }}
            src={src}
          />
        </Grid.Column>

        <Grid.Column>
          <Image
            fluid
            label={{
              as: "a",
              color: "blue",
              content: "Food",
              icon: "spoon",
              ribbon: true,
            }}
            src={src}
          />
        </Grid.Column>
      </Grid>
    </Wrapper>
    <Wrapper>
      <Grid columns={3}>
        <Grid.Row>
          <Grid.Column>
            <Segment padded>
              <Label attached="top">HTML</Label>
              <Image src={src} />
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment padded>
              <Label attached="bottom">CSS</Label>
              <Image src={src} />
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment padded>
              <Label attached="top right">Code</Label>
              <Image src={src} />
            </Segment>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column>
            <Segment padded>
              <Label attached="top left">View</Label>
              <Image src={src} />
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment padded>
              <Label attached="bottom left">User View</Label>
              <Image src={src} />
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment padded>
              <Label attached="bottom right">Admin View</Label>
              <Image src={src} />
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Wrapper>
    <Wrapper>
      <List divided selection>
        <List.Item>
          <Label color="red" horizontal>
            Fruit
          </Label>
          Kumquats
        </List.Item>
        <List.Item>
          <Label color="purple" horizontal>
            Candy
          </Label>
          Ice Cream
        </List.Item>
        <List.Item>
          <Label color="red" horizontal>
            Fruit
          </Label>
          Orange
        </List.Item>
        <List.Item>
          <Label horizontal>Dog</Label>
          Poodle
        </List.Item>
      </List>
    </Wrapper>
    <Wrapper>
      <Menu compact>
        <Menu.Item as="a">
          <Icon name="mail" /> Messages
          <Label color="red" floating>
            22
          </Label>
        </Menu.Item>
        <Menu.Item as="a">
          <Icon name="users" /> Friends
          <Label color="teal" floating>
            22
          </Label>
        </Menu.Item>
      </Menu>
    </Wrapper>
  </>
);

export default LabelExample;
