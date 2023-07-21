import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import CheckoutForm from './CheckOutForm';

const CheckoutPage = () => {
    const { calculateTotal } = useContext(CartContext);
  const importeTotal = calculateTotal(); 
  
  return (
    <div>
    
      <CheckoutForm total={importeTotal} />
    </div>
  );
};

export default CheckoutPage;
