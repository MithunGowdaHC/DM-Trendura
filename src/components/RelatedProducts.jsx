import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import ProductItem from "../components/Productitem";
import Title from "./Title";
import { Link } from "react-router-dom";
import Product from "../pages/Product";


const RelatedProducts = ({ category, subCategory }) => {
  const { products } = useContext(ShopContext);
  const [related, setRelated] = useState([]);
  useEffect(() => {
    if (products.length > 0) {
      let productsCopy = products.slice();

      productsCopy = productsCopy.filter((item) => category === item.category);
      productsCopy = productsCopy.filter(
        (item) => subCategory === item.subCategory
      );

      setRelated(productsCopy.slice(0, 5));
    }
  }, [products]);
  return (
    <Link to={'/product/:productId'}>
    <div className=" my-24">
      <div className=" text-center py-2  text-3xl">
        <Title text1={"RELATED"} text2={"PRODUCTS"} />
      </div>
      <div className=" grid grid-cols-2 sm:grid-cols-3  md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6 ">
        {related.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            price={item.price}
            name={item.name}
            image={item.image}
          />
        ))}
      </div>
    </div>
    </Link>
  );
};

export default RelatedProducts;
