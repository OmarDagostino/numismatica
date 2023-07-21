import React, { useState } from 'react';

const ItemCount = ({ stock, initial, onAdd }) => {
  const [quantity, setQuantity] = useState(initial);
  const [buttonVisible, setButtonVisible] = useState(true);

  const increment = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    onAdd(quantity);
    setButtonVisible(false); 
  };

  const resetButtonVisibility = () => {
    setButtonVisible(true); 
  };

  return (
    <div className='Counter'>
      <div className='Controls'>
        <button className='button' onClick={decrement}>-</button>
        <h4 className='number inline'>{quantity}</h4>
        <button className='button' onClick={increment}>+</button>
      </div>
      {buttonVisible && (
        <div>
          <button className='button' id="agregar" onClick={handleAddToCart} disabled={!stock}>
            Agregar al carrito
          </button>
        </div>
      )}
      {!buttonVisible && (
        <div>
          <p>Producto agregado al carrito.</p>
         
        </div>
      )}
    </div>
  );
};

export default ItemCount;
