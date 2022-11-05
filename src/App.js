
import './App.css';
import {Header } from './Components/Header/Header.js'
import {
  BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Pages from './Components/pages/Pages';
import DealsData from './Components/flashDeals/DealsData';
import { useState } from 'react';



function App() {

  // fetching data from database
  const { productItems } = DealsData

  const [cartItem, setCardItem] = useState([])
  return (
    <>
      <Router>
        <Header/>
        <Switch>
          <Route path="/"> 
            <Pages productItems={productItems}/>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
