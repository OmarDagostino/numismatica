import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import CheckoutForm from './CheckOutForm';

const CheckoutPage = () => {
    const { calculateTotal } = useContext(CartContext);
  const importeTotal = calculateTotal(); 
  console.log ("importe total en CHKOUTPAGE")
  console.log (importeTotal)
  return (
    <div>
    
      <CheckoutForm total={importeTotal} />
    </div>
  );
};

export default CheckoutPage;
