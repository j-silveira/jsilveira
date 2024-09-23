import { BrowserRouter } from 'react-router-dom';
import Cursor from './components/Cursor/Cursor';
import NavBar from './components/Navbar/NavBar';
import Home from './components/Home/Home';
import Skills from './components/Skills/Skills';
import Projects from './components/Project/Projects';
import Contacts from './components/Contacts/Contacts';
import {Footer} from './components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {

  return (
    <BrowserRouter>
      <Cursor />
      <NavBar/>
      <Home/>
      <Skills/>
      <Projects/>
      <Contacts/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
