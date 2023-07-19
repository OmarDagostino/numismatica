import { ItemDetail } from "../components/ItemDetail";
import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import {getDocs, getFirestore, collection, doc} from "firebase/firestore"

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});

  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const refCollection = collection(db, 'coins');
    const fetchData = async () => {
      try {
        const snapshot = await getDocs(refCollection);
        const result = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        const selectedProduct = result.find((product) => product.id === id);
        setProduct(selectedProduct || {});
      } catch (error) {
        console.log('Error fetching data from Firestore:', error);
      }
    };
  
    fetchData();
  }, [id]);

  return (
    <Container className="mt-4">
      <h1>Detalle de la moneda</h1>
      {Object.keys(product).length === 0 ? (
        <div>cargando...</div>
      ) : (
        <ItemDetail moneda={product} />
      )}
    </Container>
  );
};
