import React from "react";

function Airplane( {dataAirplane} ) {
  return (
    <div key={dataAirplane[0]} className="w-[200px] p-[10px]">
      <img src={dataAirplane[10]} />
      <h3>{dataAirplane[2]}</h3>
    </div>
  );
}

export default Airplane;
