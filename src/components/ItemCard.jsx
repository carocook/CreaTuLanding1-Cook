import "./ItemCard.css";

function ItemCard({ producto, carrito, setCarrito }) {
  const agregarAlCarrito = () => {
    // Ver si el producto esta en carrito
    const existe = carrito.find((item) => item.id === producto.id);

    if (existe) {
      // Incrementar cantidad
      setCarrito(
        carrito.map((item) =>
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        )
      );
    } else {
      // Agregar nuevo producto
      setCarrito([...carrito, { ...producto, cantidad: 1 }]);
    }
  };

  return (
    <div>
      <h4>{producto.nombre}</h4>
      <img src={producto.img} alt={producto.nombre} width="100" />
      <p>Precio: ${producto.precio}</p>
      <p>Cantidad: {producto.cantidad || 0}</p>
      <button onClick={agregarAlCarrito}>Agregar al carrito</button>
    </div>
  );
}

export default ItemCard;
