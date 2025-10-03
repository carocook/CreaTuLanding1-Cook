import { useState } from "react";
import "./CartWidget.css";

function CartWidget({ carrito }) {
  const [mostrarCarrito, setMostrarCarrito] = useState(false);
  const totalItems = carrito.reduce((acc, item) => acc + item.cantidad, 0);

  return (
    <div>
      <div onClick={() => setMostrarCarrito(!mostrarCarrito)}>
        🛒 {totalItems}
      </div>

      {mostrarCarrito && (
        <div>
          <h3>Tu carrito</h3>
          {carrito.length === 0 ? (
            <p>El carrito está vacío</p>
          ) : (
            <ul>
              {carrito.map((item) => (
                <li key={item.id}>
                  <img src={item.img} alt={item.nombre} />
                  {item.nombre} - Cantidad: {item.cantidad}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}

export default CartWidget;
