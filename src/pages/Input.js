import React from "react";
import {
  Input,
  Icon,
  Dropdown,
  Label,
  Select,
  Button,
  Segment,
} from "semantic-ui-react";
import Wrapper from "../components/Wrapper";

const options1 = [
  { key: ".com", text: ".com", value: ".com" },
  { key: ".net", text: ".net", value: ".net" },
  { key: ".org", text: ".org", value: ".org" },
];

const options2 = [
  { key: "page", text: "This Page", value: "page" },
  { key: "org", text: "This Organization", value: "org" },
  { key: "site", text: "Entire Site", value: "site" },
];

const options3 = [
  { key: "all", text: "All", value: "all" },
  { key: "articles", text: "Articles", value: "articles" },
  { key: "products", text: "Products", value: "products" },
];

const InputExample = () => (
  <>
    <Wrapper>
      <Input placeholder="Search..." />
    </Wrapper>
    <Wrapper>
      <Input focus placeholder="Search..." />
    </Wrapper>
    <Wrapper>
      <Input loading icon="user" placeholder="Search..." />
    </Wrapper>
    <Wrapper>
      <Input loading icon="user" iconPosition="left" placeholder="Search..." />
    </Wrapper>
    <Wrapper>
      <Input disabled placeholder="Search..." />
    </Wrapper>
    <Wrapper>
      <Input error placeholder="Search..." />
    </Wrapper>
    <Wrapper>
      <Input icon="search" placeholder="Search..." />
    </Wrapper>
    <Wrapper>
      <Input icon="users" iconPosition="left" placeholder="Search users..." />
    </Wrapper>
    <Wrapper>
      <Input
        icon={{ name: "search", circular: true, link: true }}
        placeholder="Search..."
      />
    </Wrapper>
    <Wrapper>
      <Input
        icon={<Icon name="search" inverted circular link />}
        placeholder="Search..."
      />
    </Wrapper>
    <Wrapper>
      <Input icon placeholder="Search...">
        <input />
        <Icon name="search" />
      </Input>
      <br />
      <br />
      <Input iconPosition="left" placeholder="Email">
        <Icon name="at" />
        <input />
      </Input>
    </Wrapper>
    <Wrapper>
      <Input label="http://" placeholder="mysite.com" />
    </Wrapper>
    <Wrapper>
      <Input
        label={<Dropdown defaultValue=".com" options={options1} />}
        labelPosition="right"
        placeholder="Find domain"
      />
    </Wrapper>
    <Wrapper>
      <Input
        label={{ basic: true, content: "kg" }}
        labelPosition="right"
        placeholder="Enter weight..."
      />
    </Wrapper>
    <Wrapper>
      <Input labelPosition="right" type="text" placeholder="Amount">
        <Label basic>$</Label>
        <input />
        <Label>.00</Label>
      </Input>
    </Wrapper>
    <Wrapper>
      <Input
        icon="tags"
        iconPosition="left"
        label={{ tag: true, content: "Add Tag" }}
        labelPosition="right"
        placeholder="Enter tags"
      />
    </Wrapper>
    <Wrapper>
      <Input
        label={{ icon: "asterisk" }}
        labelPosition="left corner"
        placeholder="Search..."
      />
    </Wrapper>
    <Wrapper>
      <Input
        label={{ icon: "asterisk" }}
        labelPosition="right corner"
        placeholder="Search..."
      />
    </Wrapper>
    <Wrapper>
      <Input action="Search" placeholder="Search..." />
    </Wrapper>
    <Wrapper>
      <Input
        action={{
          color: "teal",
          labelPosition: "left",
          icon: "cart",
          content: "Checkout",
        }}
        actionPosition="left"
        placeholder="Search..."
        defaultValue="52.03"
      />
    </Wrapper>
    <Wrapper>
      <Input
        action={
          <Dropdown
            button
            basic
            floating
            options={options2}
            defaultValue="page"
          />
        }
        icon="search"
        iconPosition="left"
        placeholder="Search..."
      />
    </Wrapper>
    <Wrapper>
      <Input type="text" placeholder="Search..." action>
        <input />
        <Select compact options={options3} defaultValue="articles" />
        <Button type="submit">Search</Button>
      </Input>
    </Wrapper>
    <Wrapper>
      <Input
        action={{
          color: "teal",
          labelPosition: "right",
          icon: "copy",
          content: "Copy",
        }}
        defaultValue="http://ww.short.url/c0opq"
      />
    </Wrapper>
    <Wrapper>
      <Input action={{ icon: "search" }} placeholder="Search..." />
    </Wrapper>
    <Wrapper>
      <Input transparent placeholder="Search..." />
    </Wrapper>
    <Wrapper>
      <Segment inverted>
        <Input inverted placeholder="Search..." />
      </Segment>
    </Wrapper>
    <Wrapper>
      <Input fluid icon="search" placeholder="Search..." />
    </Wrapper>
    <Wrapper>
      <Input list="languages" placeholder="Choose language..." />
      <datalist id="languages">
        <option value="English">English</option>
        <option value="Chinese">Chinese</option>
        <option value="Dutch">Dutch</option>
      </datalist>
    </Wrapper>
  </>
);

export default InputExample;
