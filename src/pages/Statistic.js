import React from "react";
import { Statistic } from "semantic-ui-react";
import Wrapper from "../components/Wrapper";

const StatisticExample = () => (
  <>
    <Wrapper>
      <Statistic>
        <Statistic.Value>5,550</Statistic.Value>
        <Statistic.Label>Downloads</Statistic.Label>
      </Statistic>
    </Wrapper>
  </>
);

export default StatisticExample;
