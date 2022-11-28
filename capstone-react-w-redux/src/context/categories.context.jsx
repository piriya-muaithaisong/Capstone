import { createContext, useState, useEffect } from "react";
//import SHOP_DATA from "../shop-data";
import {
  addCollectionAndDocuments,
  getCategoryAndDocuments,
} from "../utils/firebase/firebase.utils";

export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});
  const value = { categoriesMap };

  // useEffect(()=>{
  //   addCollectionAndDocuments('categories', SHOP_DATA)
  // },[])

  // we don't use async directly on useeffect you have to create a new one

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoryAndDocuments();
      setCategoriesMap(categoryMap)
      //console.log(categoryMap);
    };

    getCategoriesMap();
  }, []);

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
