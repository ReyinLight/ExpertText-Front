import React, { useEffect, useState } from "react";
import { TextCard } from "./TextCard";

export const RandomCard = () => {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    // Realizar la solicitud al backend cuando el componente se monte
    
    fetch("https://expert-text.fly.dev/api/random")
      .then((response) => response.json())
      .then((data) => setDatos(data))
      .catch((error) => console.error("Error al obtener el mensaje:", error));
  }, []);

  return (
    <>
      <TextCard datos={datos} />
    </>
  );
};
