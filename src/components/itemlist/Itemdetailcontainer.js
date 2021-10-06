import { Fragment, useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [productos, setproductos] = useState([]);

  useEffect(() => {
    getRopa();
  }, 2000);

  console.log(productos);

  const getRopa = async () => {
    const prendasArray = [];
    const resp = await fetch("https://fakestoreapi.com/products");
    const { results, next } = await resp.json();
    for (let producto of results) {
      const resp = await fetch(producto.url);
      const data = await resp.json();
      prendasArray.push(data);
    }
  };

  return (
    <div>
      {productos.map((producto) => (
        <ItemDetail
          key={producto.id}
          title={producto.title}
          description={producto.description}
          image={producto.image}
          price={producto.price}
        />
      ))}
    </div>
  );
};

export default ItemDetailContainer;
