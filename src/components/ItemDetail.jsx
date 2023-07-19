import ItemCount from "../components/ItemCount";
import { useContext, useState } from "react";
import { CartContext } from "./CartContext";

export const ItemDetail = ({ moneda }) => {

  const [quantityAdded, setQuantityAdded] = useState (0) 

  const {addItem} = useContext (CartContext)

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity) 
    const item = {
      ...moneda
    }
    addItem(item, quantity)
  } 
  console.log (moneda) 
  const formattedPrice = moneda.precio.toLocaleString();

  return (
    <>
      <div id="precio">Precio: {formattedPrice}</div>
      <div className='itemFooter'>
        <ItemCount initial={1} stock={moneda.stock} onAdd={handleOnAdd} />
      </div>
      <img id="imagen-de-detalle" src={moneda.detalle} alt={moneda.valor} />
    </>
  );
};
//{console.log('cantidad agregada', quantity)} 
