import React from "react";
import { Breadcrumb } from "semantic-ui-react";
import Wrapper from "../components/Wrapper";

const BreadcrumbExample = () => (
  <>
    <Wrapper>
      <Breadcrumb>
        <Breadcrumb.Section link>Home</Breadcrumb.Section>
        <Breadcrumb.Divider />
        <Breadcrumb.Section link>Store</Breadcrumb.Section>
        <Breadcrumb.Divider />
        <Breadcrumb.Section active>T-Shirt</Breadcrumb.Section>
      </Breadcrumb>
    </Wrapper>
  </>
);

export default BreadcrumbExample;
