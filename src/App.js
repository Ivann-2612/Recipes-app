import './App.css'
import Home from './components/Home'
import Pizzas from './components/Pizzas'
import Meat from './components/Meat'
import Pasta from './components/Pasta'
import Seafood from './components/Seafood'
import Fish from './components/Fish'
import Nav from './components/Nav'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {

  return (
    <Router>
     <Nav/>
      <Switch>
        <Route exact path="/pizzas" component={Pizzas} />
        <Route exact path="/meat" component={Meat} />
        <Route exact path="/pasta" component={Pasta} />
        <Route exact path="/seafood" component={Seafood} />
        <Route exact path="/fish" component={Fish} />
        <Route render={() =>  <Home/>} />
      </Switch>
    </Router>
  );
}

export default App;
