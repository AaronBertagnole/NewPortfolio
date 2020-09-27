import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Switch>
            <Route path='/' component={Home} exact />
            <Route path='/about' component={AboutUs} />
            <Route path='/contactus' component={ContactUs} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
