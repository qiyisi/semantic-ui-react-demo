import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./page/Home";
import Button from "./page/Button";

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
        </Switch>
      </div>
    </Router>
  );
}

export default App;
