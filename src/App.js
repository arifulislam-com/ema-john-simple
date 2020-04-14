import React from 'react';
import './App.css';
import Header from './componence/Header/Header';
import Shop from './componence/Shop/Shop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Review from './componence/review/Review';
import Inventory from './componence/Inventory/Inventory';
import NotFound from './componence/NotFound/NotFound';
import ProductDetail from './componence/ProductDetail/ProductDetail';
import Login from './componence/Login/Login';
import { createContext } from 'react';
import { AuthContextProvider } from './componence/Login/useAuth';
import Shipment from './componence/Shipment/Shipment';
 

function App(props) {
  const user = {name: 'KuduMia', email: 'kuddu@gmil.com'}
  return (
    <div>
      <AuthContextProvider>
        <Header></Header>
          <Router>
            <Switch>
              <Route path="/shop">
                <Shop></Shop>
              </Route>
              <Route path="/review">
                <Review></Review>
              </Route>
              <Route path="/inventory">
                <Inventory></Inventory>
              </Route>
              <Route exact path="/">
                <Shop></Shop>
              </Route>
              <Route path="/product/:productKey">
                <ProductDetail></ProductDetail>
              </Route>
              <Route path="/login">
                <Login></Login>
              </Route>
              <Route path="/shipment">
                <Shipment></Shipment>
              </Route>
              <Route path="*">
                <NotFound></NotFound>
              </Route>
            </Switch>
          </Router>
        </AuthContextProvider>
    </div>
  );
}

export default App;