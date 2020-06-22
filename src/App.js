import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
import NavBar from './components/Navbar/NavBar';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" component= {Home} />
      </Switch>
      <Footer />
    </Router>
    // <Router>
    //     <Navbar />
    //   <Switch>
    //       <Route exact path = "/" component = {Home} />
    //       <Route exact path = "/resume" component = {Cv} />
    //       <Route exact path = "/projects" component = {Projects} />
    //       <Route exact path = "contact" component = {Contact} />
    //       <Route path = "*" component = {NotFound} />
    //   </Switch>
    // </Router>    
  );
}

export default App;
