import React from "react";
import Card from "./Card";
import products from "../api/products";

const App = () => {
  const renderProductCard = () => {
    return products.map((product, index) => {
      return <Card key={index} product={product} />;
    });
  };
  return (
    <div className="flex justify-center items-center bg-cream w-screen h-screen px-6 py-8">
      {renderProductCard()}
    </div>
  );
};

export default App;
