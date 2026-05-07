import React, { useState } from "react";
import "../../../StyleSheets/Customer/InstaMart/displayproducts.css";

const DisplayProducts = () => {
  const [cart, setCart] = useState([]);

const products = [
  {
    id: 1,
    name: "Scratch Removal Spray",
    price: 299,
    image: "/assets/scratchremovalspray.jpg"
  },
  {
    id: 2,
    name: "Engine Oil Bottle",
    price: 899,
    image: "/assets/engineoil.jpg"
  },
  {
    id: 3,
    name: "Car Perfume / Air Freshener",
    price: 199,
    image: "/assets/AirFreshner.jpg"
  },
  {
    id: 4,
    name: "Microfiber Cleaning Cloth",
    price: 149,
    image: "/assets/carcleaningcloth.jpg"
  },
  {
    id: 5,
    name: "Car Vacuum Cleaner",
    price: 799,
    image: "/assets/carvaccumcleaner.jpg"
  },
  {
    id: 6,
    name: "Car Wash Shampoo",
    price: 299,
    image: "/assets/carwashshampoo.jpg"
  }
];

  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.name} added to cart`);
  };

  return (
    <div className="products-container">
      <h2>Products</h2>

      <div className="products-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />

            <div className="product-info">
              <h3>{product.name}</h3>
              <p>₹{product.price}</p>

              <button onClick={() => addToCart(product)}>
                Add
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-footer">
        <button>
          View Cart ({cart.length})
        </button>
      </div>
    </div>
  );
};

export default DisplayProducts;