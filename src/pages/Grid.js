import _ from "lodash";
import React from "react";
import { Grid, Image } from "semantic-ui-react";
import Wrapper from "../components/Wrapper";

const columns = _.times(16, (i) => (
  <Grid.Column key={i}>
    <Image src="./cat.jpg" />
  </Grid.Column>
));

const GridExample = () => (
  <>
    <Wrapper>
      <Grid>{columns}</Grid>{" "}
    </Wrapper>
  </>
);

export default GridExample;
