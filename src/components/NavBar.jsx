import React, { useEffect, useState, useContext } from 'react';
import Container from 'react-bootstrap/esm/Container';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import CartWidget from './CartWidget';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { CartContext } from './CartContext';

const NavBar = () => {
  const [categories, setCategories] = useState([]);
  const { totalQuantity } = useContext(CartContext); 

  useEffect(() => {
    const db = getFirestore();
    const refCollection = collection(db, 'coins');
    getDocs(refCollection)
      .then((snapshot) => {
        if (snapshot.size === 0) {
          console.log('sin resultados');
        } else {
          const data = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
          }));
          const categories = [...new Set(data.map((item) => item.category))];
          categories.sort(); 
          setCategories(categories);
          console.log(data);
        }
      });
  }, []);

  return (
    <Navbar>
      <Container>
        <NavLink className="nav-link" id="homename" to="/all">
          Venta de monedas de colección
        </NavLink>
        <Nav className="me-auto">
          {categories.map((item) => (
            <NavLink className="nav-link" to={`/category/${item}`} key={item}>
              {item}
            </NavLink>
          ))}
        </Nav>
        <CartWidget totalQuantity={totalQuantity} />
      </Container>
    </Navbar>
  );
};

export default NavBar;
 