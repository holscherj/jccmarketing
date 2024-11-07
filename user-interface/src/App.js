import './App.css';
import Home from "./pages/Home/Home";
import Pricing from "./pages/Pricing/Pricing";
import Contact from "./pages/Contact/Contact";
import {HashRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <HashRouter basename='/jccmarketing'>
        <Routes>
          <Route index element={<Home />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
