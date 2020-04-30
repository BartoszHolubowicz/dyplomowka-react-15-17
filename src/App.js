import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import React from 'react';

const Home = () => (
  <div>
    <h1>Witaj świecie!</h1>
    <Link to="/about">O mnie</Link>
  </div>
);

const About = ({name}) => (
  <div>
    <h1>O mnie</h1>
    <p>Jestem {name} 😃</p>
  </div>
);

function App() {
  return (
    <Router>
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" render={() => <About name={"Cezary"}/>} />
    </Router>
  );
}

export default App;
