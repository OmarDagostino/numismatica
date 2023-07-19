import Container from "react-bootstrap/Container";
import { getFirestore, getDocs, collection } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ItemList } from "../components/ItemList";

const ItemListContainer = (props) => {
  const [products, setProducts] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const db = getFirestore();
      const refCollection = collection(db, 'coins');
      
      try {
        const snapshot = await getDocs(refCollection);
        const result = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        
        if (id) {
          setProducts(result.filter((producto) => producto.category === id).sort((a, b) => a.valor.localeCompare(b.valor)));
        } else {
          setProducts(result.sort((a, b) => a.valor.localeCompare(b.valor)));
        }
      } catch (error) {
        console.log('Error fetching data from Firestore:', error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <Container className="mt-4">
      <h1>{props.greeting}</h1>
      {products.length === 0 ? (
        <div>cargando...</div>
      ) : (
        <ItemList products={products} />
      )}
    </Container>
  );
};

export default ItemListContainer;

