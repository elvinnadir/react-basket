import React, { useState } from "react";
import "./styles.css";
import Cart from "./components/cart/Cart";
export default function App({ title, image, info, onClick }) {
  const [product, setProduct] = useState([
    {
      id: 1,
      title: "Asus Motherboard",
      image: "https://picsum.photos/id/1015/6000/4000",
      info: "TUF GAMING Z690-PLUS WIFI",
      piece: 1
    },
    {
      id: 2,
      title: "Graphic card",
      image: "https://picsum.photos/id/1016/3844/2563",
      info: "GeForce RTX 3070 6gb",
      piece: 1
    },
    {
      id: 3,
      title: "RAM",
      image: "https://picsum.photos/id/1021/2048/1206",
      info: "CORSAIR Vengeance LPX 16GB 320Mhz",
      piece: 1
    },
    {
      id: 4,
      title: "POWER SUPPLY",
      image: "https://picsum.photos/id/1025/4951/3301",
      info: "CORSAIR RM850 80 PLUS GOLD",
      piece: 1
    }
  ]);

  const [basket, setBasket] = useState([]);

  return (
    <div className="App">
      <h1>REACT BASKET APP</h1>
      <h2>Product List</h2>
      <div className="products">
        {product.map((item, index) => (
          <Cart
            onClick={() => {
              const arr = [...basket];
              if (
                arr.findIndex((e) => {
                  return item.id === e.id;
                }) === -1
              ) {
                arr.push(item);
                setBasket(arr);
              } else {
                arr.map((bask) => {
                  if (bask.id === item.id) {
                    return (item.piece += 1);
                  }
                  setBasket(arr);
                });
              }
              console.log(basket);
            }}
            key={index}
            title={item.title}
            image={item.image}
            info={item.info}
          />
        ))}
      </div>
      <div className="basket">
        <h2>Basket</h2>
        <ul className="list">
          {basket.map((item, index) => {
            return (
              <li>
                {item.title + "" + item.info + " piece:"}
                <b style={{ color: "white", fontSize: "25px" }}>{item.piece}</b>
              </li>
            );
          })}
        </ul>
        {basket.length > 0 ? (
          <button
            className="clear"
            onClick={() => {
              setBasket([]);
            }}
          >
            Clear basket
          </button>
        ) : (
          <h2>Your basket is empty</h2>
        )}
      </div>
    </div>
  );
}
