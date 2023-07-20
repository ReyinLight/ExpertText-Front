import React from 'react'

function RefreshPageButton() {
    const funcionRefrescar = () =>{
        window.location.reload();
    }


  return (
    <button onClick={funcionRefrescar}>
        Nueva Frase
    </button>
  )
}

export default RefreshPageButton