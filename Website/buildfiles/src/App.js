import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';


const App = () => {
  return (
      <Router>
          <div className="navigation_card">
              <Nav />
          </div>
          <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/about" component={About} />
              <Route path="/blog" component={Blog} />
              <Route path="/contact" component={Contact} />
          </Switch>
      </Router>
  );
};

export default App;
