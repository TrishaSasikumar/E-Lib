import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home.js';
import Login from './pages/login.js';
import Register from './pages/register.js';
import Cart from './pages/cart.js';
import CartContextProvider from './components/cartContext';
import { AuthProvider } from './components/authContext.js';
import Shopping from './pages/shopping.js';
import ProtectedRoute from './components/protectedRoute.js';

function App() {
  return (
    <AuthProvider>
      <CartContextProvider>
      <Router>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/shopping" element={<Shopping />} />
        </Routes>
      </Router>
      </CartContextProvider>
    </AuthProvider>
  );
}

export default App;
