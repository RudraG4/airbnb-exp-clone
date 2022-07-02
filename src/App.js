import './App.css';
import React from "react";
import Card from './components/Card';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import experiences from './data/experiences';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <section className="experiences">
        {experiences && experiences.map(data => <Card key={data.id} data={data} />)}
      </section>
    </div>
  );
}

export default App;
