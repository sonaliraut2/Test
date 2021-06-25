import React, { useState } from 'react';
import TopBar from "./components/Topbar";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";

interface Products {
  id: string;
  title: string;
  price: number;
  image: string;
  description: string;
}

function App() {
  const [products, setProducts] = useState<Products[]>([]);
  
  const addProductHandler = (title:string, price:number, image:string, description:string) => {
    setProducts(
      prevProduct => [...prevProduct, 
        {
        id:Math.random().toString(),
        title:title, 
        price:price, 
        image:image, 
        description:description
      }
    ]);
  }

  const deleteHandler = (id:string) => {
    setProducts(prevProduct => {
        return prevProduct.filter(product => product.id !== id);
    })
  }
  return (
    <>
      <TopBar />
      <ProductForm addHandler={addProductHandler}/>
      <ProductList items={products} onDeleteProduct={deleteHandler}/>
    </>
  );
}

export default App;
