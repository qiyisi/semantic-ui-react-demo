import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";
import Wrapper from "../components/Wrapper";

const CardExample = () => (
  <>
    <Wrapper>
      <Card>
        <Image src="./cat.jpg" wrapped ui={false} />
        <Card.Content>
          <Card.Header>Matthew</Card.Header>
          <Card.Meta>
            <span className="date">Joined in 2015</span>
          </Card.Meta>
          <Card.Description>
            Matthew is a musician living in Nashville.
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a href>
            <Icon name="user" />
            22 Friends
          </a>
        </Card.Content>
      </Card>
    </Wrapper>
  </>
);

export default CardExample;
