import React from 'react'

const TodoCounter = ({ completed }) => {
  return (
    <>
      <h3>Proyectos:<small id='count'> {completed}</small></h3>
    </>
  )
}

export { TodoCounter }
