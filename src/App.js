import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './components/CartContext';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import Cart from './components/Cart';
import './App.css';
import CheckoutPage from './components/CheckOutPage'; 

function App() {
  const tituloDeCategoria = 'Monedas';
  const tituloDeProducto = '';

  return (
    <div>
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer greeting={tituloDeProducto} />} />
            <Route path="/category/:id" element={<ItemListContainer greeting={tituloDeCategoria} />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/all" element={<ItemListContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<CheckoutPage />} />
          </Routes>
        </CartProvider>
        <div id="pie-de-pagina">
          <p>  Todas las monedas comercializadas en
                este sitio tienen su código KM
                correspondiente y son originales
                - KM es el acrónimo de Krause-Mishler. 
                Este código pertenece al sistema de clasificación
                 establecido en el Standard Catalog of World Coins, 
                 también llamados «Catálogos Krause» e identifica univocamente a una moneda -
          </p>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;



/*
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./components/CartContext"; 
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
import "./App.css";
import CheckoutForm from './components/CheckOutForm';

function App() {
  const tituloDeCategoria = "Monedas";
  const tituloDeProducto = "";

  return (
    <div>
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer greeting={tituloDeProducto} />} />
            <Route path="/category/:id" element={<ItemListContainer greeting={tituloDeCategoria} />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/all" element={<ItemListContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<CheckoutForm />} />
          </Routes>
        </CartProvider>
        <div id="pie-de-pagina">
          <p>  Todas las monedas comercializadas en</p>
          <p>   este sitio tienen su código KM</p>
          <p>  correspondiente y son originales</p>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
*/