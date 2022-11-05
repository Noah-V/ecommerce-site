
import './App.css';
import {Header } from './Components/Header/Header.js'
import {
  BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Pages from './Components/pages/Pages';



function App() {
  return (
    <>
      <Router>
        <Header/>
        <Switch>
          <Route path="/" component={Pages}>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
