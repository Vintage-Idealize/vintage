import './App.css';
import Dashboard from './components/dashboard/dashboard';
import HomePage from './components/HomePage/HomePage';
import ProductViewPage from './components/ProductViewPage/ProductViewPage';
import CartPage from './components/CartPage/CartPage';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="" element={<HomePage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/productViewPage" element={<ProductViewPage />} />
        <Route path="/cartPage" element={<CartPage/>} />
      </Routes>
    </Router>  
    </div>
  );

}

export default App;

