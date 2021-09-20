import React, { useState } from "react";
import "./itemcont.css";

const ItemCount = ({ Contador, onSum, onSubstract, onAdd }) => {
  return (
    <>
      <div className="divBtn">
        <p>Prendas a agregar al carrito: {Contador}</p>
        <button className="btn" onClick={onSum}>
          Aumentar
        </button>
        <button className="btn" onClick={onSubstract}>
          Restar
        </button>
        <button className="btn" onClick={onAdd}>
          Agregar al carrito
        </button>
      </div>
    </>
  );
};
export default ItemCount;
