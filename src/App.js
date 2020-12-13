import React from 'react';
import './App.css';
import Hero from './components/Hero';
import Nav from './components/Nav';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Header from './components/Header';
import Footer from './components/Footer';


class App extends React.Component {


  render() {

    return (
      <div className="App">
        <Nav />
        <Header />
        <nav>
          <Hero />
        </nav>
        <main>
          <About />
          <Projects />
          <Skills />
        </main>
        <section>
          <Contact />
        </section>
        <Footer />
      </div>
    );
  }
}
export default App;
