import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
// import ProductItem from "./ProductItem";
import ProductItem from "./Productitem";

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setlatestProducts] = useState([]);


  useEffect(() => {
    setlatestProducts(products.slice(0, 10));
  }, []);
  console.log(latestProducts);

  return (
    <div className=" my-10 ">
      <div className=" text-center py-8 text-3xl">
        <Title text1={"LATEST"} text2={"COLLECTIONS"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis
          natus fuga tenetur labore sint animi reprehenderit magni cupiditate
          voluptatibus iste dolore, necessitatibus esse perferendis dolores
          mollitia consectetur. Quas, aut maxime.
        </p>
      </div>

      <div className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6  ">
        {latestProducts.map((item, index) => (
          <ProductItem
            key={index}
            price={item.price}
            id={item._id}
            image={item.image}
            name={item.name}
          />
        ))}
      </div>
    </div>
  );
};

export default LatestCollection;
