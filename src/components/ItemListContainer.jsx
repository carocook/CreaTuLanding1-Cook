import ItemCard from "./ItemCard";
import anilloImg from "../assets/anillo.jpg";
import collarImg from "../assets/collar.jpg";
import pulseraImg from "../assets/pulsera.jpg";
import "./ItemListContainer.css";

const joyas = [
  { id: 1, nombre: "Anillo de Oro", precio: 120, img: anilloImg },
  { id: 2, nombre: "Collar de Plata", precio: 80, img: collarImg },
  { id: 3, nombre: "Pulsera con Diamante", precio: 200, img: pulseraImg },
];

function ItemListContainer({ greeting, carrito, setCarrito }) {
  return (
    <section>
      <h2>{greeting}</h2>
      <div className="item-list">
        {joyas.map((joya) => (
          <ItemCard
            key={joya.id}
            producto={joya}
            carrito={carrito}
            setCarrito={setCarrito}
          />
        ))}
      </div>
    </section>
  );
}

export default ItemListContainer;
