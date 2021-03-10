import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import About from './components/about/about';
import TechStack from './components/tech/tech-stack';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <TechStack />
      <Footer />
    </div>
  );
}

export default App;
