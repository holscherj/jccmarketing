import './App.css';
import Home from "./pages/Home/Home";
import About from "./pages/About/About"
import GetStarted from './pages/GetStarted/GetStarted';
import Contact from "./pages/Contact/Contact";
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="getstarted" element={<GetStarted />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
