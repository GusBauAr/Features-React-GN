import React from "react";


export const ShowIncrement = React.memo(( {increment}) => {

    console.log('me volvi a generar')

  return (
    <button
        className=" btn btn-primary"
        onClick={() =>{
            increment( 5 ); //si queremos contar 5 en 5

        }}
    >
        incrementar
    </button>
  )
})
