import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import { TodoList } from '../components/TodoList'
import { TodoItem } from '../components/TodoItem'
import todos from '../data/people'
 
const PortfolioSection = () => {
  return (
    <Container>
      <br />
      <h2>Sobre mí</h2>
      <TodoList>
      {todos.map((todo, index) => (
          <TodoItem
            key={index}
            nombre={todo.nombre}
            fecha={todo.fecha}
            nacionalidad={todo.nacionalidad}
            ubicacion={todo.ubicacion}
          />
        ))}
      </TodoList>
    </Container>
  )
}

export { PortfolioSection } 
