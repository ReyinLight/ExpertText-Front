import React, { useEffect, useState } from "react";

export function TextCard({datos}) {
    
  const [texto, setTexto] = useState("");
  const [fuente, setFuente] = useState(null);
  const [etiquetas, setEtiquetas] = useState([]);

  useEffect(() => {
    // Establecer el estado inicial cuando el componente se monta
    setTexto(datos.texto);
    setFuente(datos.fuente);
    setEtiquetas(datos.etiquetas);
  }, [datos.texto, datos.fuente, datos.etiquetas]);

  const etiquetasValidas = Array.isArray(etiquetas) ? etiquetas : [];

  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <div className="bg-blue-100 border-blue-300 border-2 p-4 rounded-md shadow-lg">
          <h1 className="text-xl font-semibold mb-2">{texto}</h1>
          <p className="text-lg text-blue-500">{fuente}</p>

          <div>
            {etiquetasValidas.map((elemento) => (
              <button
                key={elemento.id}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2"
              >
                {elemento.etiqueta}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
