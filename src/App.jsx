import { useState } from "react";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  const [carrito, setCarrito] = useState([]);
  return (
    <>
      <NavBar carrito={carrito} setCarrito={setCarrito} />

      <section id="inicio">
        <h1>Bienvenida a nuestra tienda!</h1>
        <p>
          Kuvika Store nació como un pequeño emprendimiento con la idea de
          compartir nuestra pasión por los accesorios que combinan estilo,
          calidad y un toque único. Lo que empezó siendo un proyecto casero y
          artesanal, fue creciendo gracias a la confianza de cada clienta que
          eligió nuestras piezas. Hoy seguimos con la misma esencia: crear y
          seleccionar productos pensados para acompañarte todos los días, con
          diseños versátiles y detalles que marcan la diferencia.
        </p>
      </section>

      <section id="productos">
        <h2>Productos</h2>
        <ItemListContainer
          greeting="Nuestros productos"
          carrito={carrito}
          setCarrito={setCarrito}
        />
      </section>

      <section id="cuidado">
        <h2>Cómo cuidar tus joyas</h2>

        <h3>Plata</h3>
        <p>
          Evita el contacto con agua, perfumes, cremas o productos químicos, ya
          que pueden opacarla. Para mantener su brillo, límpiala con un paño
          suave y seco después de usarla. Guarda cada pieza por separado en
          bolsitas o estuches para evitar rayones.
        </p>

        <h3>Plata Gold y Plata Rose Gold</h3>
        <p>
          Estas joyas con baño de color requieren cuidados extra. Retíralas
          antes de bañarte, nadar o aplicar perfumes y cosméticos. Limpia
          suavemente con un paño hipoalergénico y guárdalas separadas de otras
          piezas para prevenir desgaste y arañazos.
        </p>

        <h3>Acero Dorado</h3>
        <p>
          Aunque es más resistente, conviene evitar productos químicos
          agresivos. Lava con agua tibia y jabón neutro, seca bien y guarda en
          un lugar seco, preferentemente en bolsas o compartimentos individuales
          para que no se raye ni pierda brillo.
        </p>

        <h3>Tip general</h3>
        <p>
          Siempre quítate las joyas antes de dormir, hacer deporte o realizar
          tareas domésticas. Guardarlas correctamente y limpiarlas con cuidado
          prolonga su belleza y vida útil.
        </p>
      </section>

      <section id="cambios">
        <h2>Cambios y devoluciones</h2>
        <p>
          Tu satisfacción es muy importante para nosotras. Por eso, te acercamos
          cuáles son nuestras políticas de cambios y devoluciones para que
          puedas comprar con total tranquilidad.
        </p>

        <h3>CAMBIOS</h3>
        <ul>
          <li>
            Nuestros productos tienen cambio a excepción de los productos
            personalizados (Código civil y Comercial de la Nación Art. 1116) Son
            productos únicos y realizados exclusivamente para vos.
          </li>
          <li>
            En los casos que sea posible el cambio, tenés un plazo de 30 días
            desde realizada tu compra para realizar el mismo, siempre sujeto a
            la disponibilidad de stock. Una vez concluido ese plazo, no será
            posible hacerlo.
          </li>
          <li>
            Si el cambio debe realizarse por un error en el empaquetado o un
            defecto del producto, el costo de envío de ida y vuelta lo
            asumiremos nosotras.
          </li>
          <li>
            Si querés realizar un cambio por un producto de menor valor, podés
            optar por solicitar un comprobante por esa diferencia de precio -que
            te será enviado por mail- para utilizar dentro de los 90 días desde
            realizado el cambio conforme lo establece la Ley 3281.
          </li>
          <li>
            No se aceptarán cambios de productos que hayan sido usados y, para
            efectuar el cambio, es requisito que se encuentre presentado en su
            empaque original, con etiqueta y la bolsa de nuestra marca.
          </li>
          <li>
            Si efectuaste tu compra y luego el producto sufre una modificación
            en su precio, ya sea que aumente o se venda con un valor
            promocional, el importe a tu favor será el que efectivamente pagaste
            y figura en tu factura de compra.
          </li>
          <li>
            Si estás en el interior y querés cambiar un producto, el costo del
            envío para reenviarnos el producto y remitirte el nuevo, correrá por
            tu cuenta.
          </li>
          <li>
            En los casos en que exista un reclamo por la calidad del producto,
            pasados los 30 días de la compra, el mismo se remitirá a nuestros
            talleres para su análisis. El costo de remitirnos el producto al
            Showroom para su análisis correrá por cuenta del cliente.
            Posteriormente, el despacho del mismo correrá por cuenta nuestra.
          </li>
        </ul>

        <h3>DEVOLUCIONES</h3>
        <ul>
          <li>
            Todos nuestros productos tienen devolución a excepción de los
            productos personalizados (Código civil y Comercial de la Nación Art.
            1116).
          </li>
          <li>
            Si realizaste tu compra a través de la tienda online y estás
            disconforme con el/los producto/s recibidos, tenés un plazo de 10
            días desde recibida tu compra para solicitar la devolución de tu
            dinero. Para que podamos procesarla, tenés que devolvernos el/los
            producto/s tal como los recibiste, en su empaque original. Los
            gastos de devolución estarán a nuestro cargo tal como lo establece
            el artículo 34 de la Ley 24.240 de defensa del consumidor.
          </li>
          <li>
            Si realizaste el pago de tu compra a través de la Tienda Online: La
            devolución del dinero será a través del mismo medio de pago que
            utilizaste para realizar tu compra.
          </li>
        </ul>
      </section>
    </>
  );
}

export default App;
