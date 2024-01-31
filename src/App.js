import './App.css';
import Home from './pages/home';
import Product from './components/products';
import Contact from './pages/contact';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NoPage from './pages/nopage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
          <Route index element={<Home />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
