import { useEffect, useState } from "react";
import Airplane from "./Airplane";
function ListAirplane() {
  const [obj, setObj] = useState([]);
  const [carga, setCarga] = useState(false);
  useEffect(() => {
    async function fecthSoli() {
      const response = await fetch(
        "https://api.nasa.gov/techtransfer/patent/?engine&api_key=lxhIb6segaDMWSIntrxPaSGx80p4SXxwdyPUFlpE"
      );
      const data = await response.json();
      setObj(data.results);
      setCarga(true);
    }
    fecthSoli();
  }, []);
  return (
    <div className="grid grid-cols-3 gap-4">
      {carga
        ? obj.length != 0
          ? obj.map((o) => {
              return (
                <Airplane key={o[0]} dataAirplane={o}></Airplane>
              );
            })
          : "No hay resultados"
        : "Cargando datos..."}
    </div>
  );
}

export default ListAirplane;
