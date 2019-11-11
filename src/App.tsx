import React from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./views/Home";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <Typography>ewigj</Typography>
          <Button variant="contained" color="primary">
            Click me
          </Button>
          <Button variant="contained" color="secondary">
            Click me
          </Button>
        </p>
      </header>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
