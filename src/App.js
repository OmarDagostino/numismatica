import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./components/CartProvider"; // Importa el CartProvider
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
import "./App.css";

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


/*import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ItemDetailContainer } from "./components/ItemDetailContainer";
import React from 'react';
import Cart from "./components/Cart.jsx";
import NavBar from "./components/NavBar.jsx";
import ItemListContainer from "./components/ItemListContainer";
import { CartProvider } from "./components/CartContext";

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
          </Routes>
        </CartProvider>
        <div id="pie-de-pagina">
          <p>Todas las monedas comercializadas en</p>
          <p>este sitio tienen su código KM</p>
          <p>correspondiente y son originales</p>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
*/

/* import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ItemDetailContainer } from "./components/ItemDetailContainer";
import React from 'react';
import Cart  from "./components/Cart.jsx";
import NavBar from "./components/NavBar.jsx";
import ItemListContainer from "./components/ItemListContainer";
import { CartProvider } from "./components/CartContext";


function App() {
  const tituloDeCategoria = "Monedas";
  const tituloDeProducto = "";

  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <CartProvider>
          <Routes>
            <Route path="/" element={<ItemListContainer greeting={tituloDeProducto} />} />
            <Route path="/category/:id" element={<ItemListContainer greeting={tituloDeCategoria} />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/all" element={<ItemListContainer />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </CartProvider>
        <div id="pie-de-pagina">
          <p>Todas las monedas comercializadas en</p>
          <p>este sitio tienen su código KM</p>
          <p>correspondiente y son originales</p>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
*/ 