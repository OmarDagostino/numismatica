import React, { useState, useContext } from 'react';
import { getFirestore, addDoc, collection } from "firebase/firestore";
import { CartContext } from "./CartContext";

const CheckoutForm = ({total}) => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    telefono: '',
    email: '',
  });
  const { cart, clearCart } = useContext(CartContext);
  const sendOrder = () => {
  
    const order = {
      buyer: formData,
      items: cart,
      total: total,
    }
    const db = getFirestore ()
    const orderCollection = collection (db, "orders")

    console.log (total)
  
    addDoc (orderCollection, order).then (response => {
      if (response.id) {
        clearCart ();
        const orderId = response.id;
        alert ("Su orden "+ orderId + "ha sido realizada!");
      }
    })
  
  
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({
      nombre: '',
      apellido: '',
      telefono: '',
      email: '',
    });
  };

  return (
    <form id="formulario" onSubmit={handleSubmit}>
      <div>
        <p style={{ fontWeight:'bold'}} >Ingresa tus datos personales</p>
        <label className="margen">
          Nombre:
          <input
            type="text"
            name="nombre" 
            value={formData.nombre}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div>
        <label className="margen">
          Apellido:
          <input
            type="text"
            name="apellido"
            value={formData.apellido}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div>
        <label className="margen">
          Teléfono:
          <input
            type="tel"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div>
        <label className="margen">
          E-mail     :
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <button className="margen botonconfirma"  onClick={sendOrder} type="submit">Confirmo la compra</button>
    </form>
  );
};

export default CheckoutForm;
