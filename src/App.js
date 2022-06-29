import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import video from '../src/assets/video/Blurry_Trees_Seamless_Loop_02_Videvo.mov';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
    <video playsInline autoPlay muted loop id='bgvid' style={{
      position: "fixed",
      width:"100%",
      left:'50%',
      top:'50%',
      height:'100%',
      objectFit:"cover",
      transform:"translate(-50%, -50%)",
      zIndex:'-1'
    }}>

      <source src={video} type='video/mp4'/>
    </video>
        <div >
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
