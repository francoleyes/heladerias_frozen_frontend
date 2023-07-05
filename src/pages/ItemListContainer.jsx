import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, Loader } from "semantic-ui-react";

import {ItemList} from "../components/ItemList"
import useHfrozen from "../hooks/useHfrozen";

export function ItemListContainer() {
  const {id} = useParams();
  const {getProducts} = useHfrozen();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  
  useEffect(() => {
    (async () => {
      const products = await getProducts();
      setProducts(products);
      setIsLoading(false);
    })();
  }, []);


  const categoryFilter = products ? products.filter(product => product.category == id) : [];

  return (
    <section className="mb-5">
      <h1 className="text-center mt-5">FROZEN</h1>
      {isLoading ? <p className='text-center'>Cargando...</p> : 
      (id ? <ItemList product={categoryFilter} /> : <ItemList product={products}/>)}
    </section>
  );
};