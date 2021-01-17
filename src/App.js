import React from 'react';
import { HashRouter, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Footer from './components/Footer';


function App() {
  return (
    <HashRouter basename='/'>
      <div>
        <Navbar />
        <ul>
            <Route exact path="/" component={Home} />
            <Route path="/Portfolio" component={Portfolio} />
            <Route path="/Contact" component={Contact} /> 
        </ul> 
        <Footer /> 
      </div>
    </HashRouter>
  );
}


export default App;
