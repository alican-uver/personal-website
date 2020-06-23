import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/Navbar/NavBar';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';
import Resume from './pages/Resume';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/cv" component={Resume} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contact" component={Contact} />
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
