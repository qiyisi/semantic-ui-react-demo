import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Button from "./pages/Button";
import Container from "./pages/Container";
import Divider from "./pages/Divider";
import Header from "./pages/Header";
import Image from "./pages/Image";
import Input from "./pages/Input";
import Label from "./pages/Label";
import List from "./pages/List";
import Loader from "./pages/Loader";
import Placeholder from "./pages/Placeholder";
import Rail from "./pages/Rail";
import Reveal from "./pages/Reveal";
import Step from "./pages/Step";
import Breadcrumb from "./pages/Breadcrumb";
import Form from "./pages/Form";
import Grid from "./pages/Grid";
import Menu from "./pages/Menu";
import Message from "./pages/Message";
import Table from "./pages/Table";
import Advertisement from "./pages/Advertisement";
import Card from "./pages/Card";
import Comment from "./pages/Comment";
import Feed from "./pages/Feed";
import Item from "./pages/Item";
import Statistic from "./pages/Statistic";
import Accordion from "./pages/Accordion";
import Checkbox from "./pages/Checkbox";
import Dimmer from "./pages/Dimmer";
import Dropdown from "./pages/Dropdown";
import Embed from "./pages/Embed";
import Modal from "./pages/Modal";
import Popup from "./pages/Popup";
import Progress from "./pages/Progress";
import Rating from "./pages/Rating";
import Search from "./pages/Search";
import Sidebar from "./pages/Sidebar";
import Sticky from "./pages/Sticky";
import Tab from "./pages/Tab";
import Transition from "./pages/Transition";
import Confirm from "./pages/Confirm";
import Pagination from "./pages/Pagination";
import Portal from "./pages/Portal";
import Radio from "./pages/Radio";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/button">
            <Button />
          </Route>
          <Route path="/container">
            <Container />
          </Route>
          <Route path="/divider">
            <Divider />
          </Route>
          <Route path="/header">
            <Header />
          </Route>
          <Route path="/image">
            <Image />
          </Route>
          <Route path="/input">
            <Input />
          </Route>
          <Route path="/label">
            <Label />
          </Route>
          <Route path="/list">
            <List />
          </Route>
          <Route path="/loader">
            <Loader />
          </Route>
          <Route path="/placeholder">
            <Placeholder />
          </Route>
          <Route path="/rail">
            <Rail />
          </Route>
          <Route path="/reveal">
            <Reveal />
          </Route>
          <Route path="/step">
            <Step />
          </Route>
          <Route path="/breadcrumb">
            <Breadcrumb />
          </Route>
          <Route path="/form">
            <Form />
          </Route>
          <Route path="/grid">
            <Grid />
          </Route>
          <Route path="/menu">
            <Menu />
          </Route>
          <Route path="/message">
            <Message />
          </Route>
          <Route path="/table">
            <Table />
          </Route>
          <Route path="/advertisement">
            <Advertisement />
          </Route>
          <Route path="/card">
            <Card />
          </Route>
          <Route path="/comment">
            <Comment />
          </Route>
          <Route path="/feed">
            <Feed />
          </Route>
          <Route path="/item">
            <Item />
          </Route>
          <Route path="/statistic">
            <Statistic />
          </Route>
          <Route path="/accordion">
            <Accordion />
          </Route>
          <Route path="/checkbox">
            <Checkbox />
          </Route>
          <Route path="/dimmer">
            <Dimmer />
          </Route>
          <Route path="/dropdown">
            <Dropdown />
          </Route>
          <Route path="/embed">
            <Embed />
          </Route>
          <Route path="/modal">
            <Modal />
          </Route>
          <Route path="/popup">
            <Popup />
          </Route>
          <Route path="/progress">
            <Progress />
          </Route>
          <Route path="/rating">
            <Rating />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/sidebar">
            <Sidebar />
          </Route>
          <Route path="/sticky">
            <Sticky />
          </Route>
          <Route path="/tab">
            <Tab />
          </Route>
          <Route path="/transition">
            <Transition />
          </Route>
          <Route path="/confirm">
            <Confirm />
          </Route>
          <Route path="/pagination">
            <Pagination />
          </Route>
          <Route path="/portal">
            <Portal />
          </Route>
          <Route path="/radio">
            <Radio />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
