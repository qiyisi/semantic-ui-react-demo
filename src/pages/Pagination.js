import React from "react";
import { Pagination } from "semantic-ui-react";
import Wrapper from "../components/Wrapper";

const PaginationExample = () => (
  <>
    <Wrapper>
      <Pagination defaultActivePage={5} totalPages={10} />
    </Wrapper>
  </>
);

export default PaginationExample;
