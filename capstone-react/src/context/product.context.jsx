import { createContext, useState, useEffect } from "react";
import SHOP_DATA from "../shop-data";
import { addCollectionAndDocuments, getCategoryAndDocuments } from "../utils/firebase/firebase.utils";

export const ProductsContext = createContext({
  products: [],
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const value = { products };

  // useEffect(()=>{
  //   addCollectionAndDocuments('categories', SHOP_DATA)
  // },[])

  // we don't use async directly on useeffect you have to create a new one

  useEffect(()=>{
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoryAndDocuments();
      //setProducts(categoryMap)
      console.log(categoryMap)
    }

    getCategoriesMap()
    
  },[])

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
