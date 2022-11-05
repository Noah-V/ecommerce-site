
import './App.css';
import {Header } from './Components/Header/Header.js'
import {
  BrowserRouter as Router, Switch, Route, Link 
} from "react-router-dom";
import { Pages } from './Components/pages/Pages';


function App() {
  return (
    <>
      <Router>
        <Header/>
        <Switch>
          <Route path="/" exact>
            <Pages />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
