import React from "react";

const Card = ({ product }) => {
  return (
    <div className="bg-white flex flex-col w-full h-full rounded-lg desktop:w-1/3 desktop:h-3/5 desktop:flex-row overflow-hidden font-body text-darkgrayishblue">
      <picture>
        <source
          media="(min-width:1440px)"
          srcSet={product.productPreview.large}
        />
        <source
          media="(min-width:375px)"
          srcSet={product.productPreview.small}
        />
        <img
          src={product.productPreview.small}
          alt="product"
          className="object-cover h-full"
        />
      </picture>
      <div className="p-6 desktop:p-8 flex flex-col h-full justify-between desktop:w-1/2">
        <section id="product-details" className="flex flex-col gap-3">
          <p className="tracking-[0.3rem]">
            {product.productType.toUpperCase()}
          </p>
          <h1 className="font-display text-4xl text-verydarkblue">
            {product.productName}
          </h1>
          <p className="leading-6 tracking-wide">{product.productDesc}</p>
        </section>
        <section id="product-buy">
          <div className="flex items-center gap-6 mb-6">
            <p className="text-4xl text-darkcyan font-display">
              {product.productDiscount
                ? `$${product.productPrice - product.productDiscount}`
                : `$${product.productPrice}`}
            </p>
            <p className="line-through">
              {product.productDiscount ? `$${product.productPrice}` : ""}
            </p>
          </div>
          <button className="w-full flex bg-darkcyan text-white items-center justify-center gap-3 rounded-lg py-5 hover:bg-green-900">
            <img src="./static/images/icon-cart.svg" alt="cart icon" />
            <span className="font-bold tracking-wide">Add to Cart</span>
          </button>
        </section>
      </div>
    </div>
  );
};

export default Card;
