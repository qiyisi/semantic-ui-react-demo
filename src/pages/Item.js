import React from "react";
import { Item, Image } from "semantic-ui-react";
import Wrapper from "../components/Wrapper";

const src = "./cat.jpg";

const ItemExample = () => (
  <>
    <Wrapper>
      <Item.Group>
        <Item>
          <Item.Image size="tiny" src={src} />

          <Item.Content>
            <Item.Header as="a">Header</Item.Header>
            <Item.Meta>Description</Item.Meta>
            <Item.Description>
              <Image src={src} />
            </Item.Description>
            <Item.Extra>Additional Details</Item.Extra>
          </Item.Content>
        </Item>

        <Item>
          <Item.Image size="tiny" src={src} />

          <Item.Content>
            <Item.Header as="a">Header</Item.Header>
            <Item.Meta>Description</Item.Meta>
            <Item.Description>
              <Image src={src} />
            </Item.Description>
            <Item.Extra>Additional Details</Item.Extra>
          </Item.Content>
        </Item>
      </Item.Group>
    </Wrapper>
  </>
);

export default ItemExample;
