import React from "react";
import { Advertisement } from "semantic-ui-react";
import Wrapper from "../components/Wrapper";

const AdvertisementExample = () => (
  <>
    <Wrapper>
      <Advertisement unit="medium rectangle">
        <img src="./cat.jpg" alt="" />
      </Advertisement>
    </Wrapper>
  </>
);

export default AdvertisementExample;
