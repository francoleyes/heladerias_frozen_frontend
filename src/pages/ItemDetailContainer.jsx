import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

import {ItemDetail} from "../components/ItemDetail"
import useHfrozen from "../hooks/useHfrozen";

export function ItemDetailContainer(){
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

  const productsFilter = products && products.filter(product => product.id == id);

  return (
    <div className="row d-flex justify-content-center">
      {isLoading ? (
        <div className='text-center'>Cargando datos...</div>
      ) : productsFilter && productsFilter.length > 0 ? (
        <ItemDetail product={productsFilter[0]} />
      ) : (
        <div className="text-center mt-5"> <strong>No se encontró el producto con el id {id}.</strong></div>
      )}
    </div>
  );
}
