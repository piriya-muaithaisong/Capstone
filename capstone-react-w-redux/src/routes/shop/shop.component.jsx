import { Routes, Route } from "react-router-dom";
import CategoriesPreview from "../categories-preview/categories-previw.component";
import Category from "../category/category.component";
import "./shop.styles.scss";

import { useEffect } from "react";
import { getCategoryAndDocuments } from "../../utils/firebase/firebase.utils";
import { setCategoriesMap } from "../../store/categories/categories.action";
import { useDispatch } from "react-redux";

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoryAndDocuments();
      dispatch(setCategoriesMap(categoryMap));
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
