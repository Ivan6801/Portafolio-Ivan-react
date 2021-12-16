import React from 'react'

const TodoItem = (props) => {
  return (
    <>
      <h3>Nombre: <small>{props.nombre}</small></h3>
      <h3>Fecha de nacimiento: <small>{props.fecha}</small></h3>
      <h3>Nacionalidad: <small>{props.nacionalidad}</small></h3>
      <h3>Ubicación: <small>{props.ubicacion}</small></h3>
    </>
  )
}

export { TodoItem }
