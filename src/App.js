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
        </Switch>
      </div>
    </Router>
  );
}

export default App;
