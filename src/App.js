import './App.css';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';
import { Prices } from './components/Prices';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Prices />
      <Contact />
    </div>
  );
}

export default App;