import { Routes, Route } from "react-router-dom";
import CategoriesPreview from "../categories-preview/categories-previw.component";
import Category from "../category/category.component";
import "./shop.styles.scss";

import { useEffect } from "react";
import { getCategoryAndDocuments } from "../../utils/firebase/firebase.utils";
import { setCategories } from "../../store/categories/categories.action";
import { useDispatch } from "react-redux";

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesArray = await getCategoryAndDocuments();
      //console.log(categoriesArray);
      dispatch(setCategories(categoriesArray));
      //console.log(categoryMap);
    };

    getCategoriesMap();
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};
export default Shop;
