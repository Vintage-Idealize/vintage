import './App.css';
import Dashboard from './components/dashboard/dashboard';
import HomePage from './components/HomePage/HomePage';
import ProductViewPage from './components/ProductViewPage/ProductViewPage';
import CartPage from './components/CartPage/CartPage';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import SellerPage from './components/SellerPage/SellerPage';
import OrderPage from './components/orderPage/orderPage';

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="" element={<HomePage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/productViewPage" element={<ProductViewPage />} />
        <Route path="/cartPage" element={<CartPage/>} />
        <Route path="/sellerPage" element={<SellerPage/>} />
        <Route path="/orderPage" element={<OrderPage/>} />

      </Routes>
    </Router>  
    </div>
  );

}

export default App;

