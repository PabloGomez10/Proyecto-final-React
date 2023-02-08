import { useLocation, useParams } from "react-router-dom";



const Descripcion = ({ datos }) => {

  let { nombre } = useParams(); // name is the name of the movie or series

  const type = useLocation().pathname.split("/")[1]; // type is the type of the movie or series

  const items = datos[type]; // items is the array of movies or series

  const item = items.find((item) => item.nombre === nombre); // item is the movie or series with the name

  return (

    <div className="">

      <div className="card styleCardDescription animate__bounceIn">



      <h2>{item.nombre}</h2>


      <p className="font-weight">Precio: {item.precio}$</p>

      </div>

    </div>

  );

};



export default Descripcion;