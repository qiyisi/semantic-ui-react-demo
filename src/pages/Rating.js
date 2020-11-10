import React from "react";
import { Rating } from "semantic-ui-react";
import Wrapper from "../components/Wrapper";

const RatingExample = () => (
  <>
    <Wrapper>
      <Rating icon="star" defaultRating={3} maxRating={4} />
    </Wrapper>
  </>
);

export default RatingExample;
