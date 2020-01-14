import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Pages/Home';
import Statics from './components/Pages/Statics';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/statics" component={Statics} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
