import Header from "./components/Header";
import Cocktails from "./components/Cocktails";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Details from "./components/Details";
import NotFound from "./components/NotFound";

function App() {
  return (
    <Router basename="/cocktails">
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={Cocktails}></Route>
          <Route path="/details" component={Details}></Route>
          <Route component={NotFound}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
