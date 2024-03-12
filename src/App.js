import './App.css';
import Home from './pages/Home';
import Gallary from './pages/product';
import Activity from './pages/offers';
import About from './pages/about';
import Header from './components/Header';
import React from "react";
import Footer from './components/footer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/product'>
            <Gallary></Gallary>
          </Route>
          <Route path='/offer'>
            <Activity></Activity>
          </Route>
          <Route path='/about'>
            <About></About>
          </Route>
          
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
