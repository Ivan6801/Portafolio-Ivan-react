import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Portafolio } from '../pages/Portafolio'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Portafolio} />
      </Switch>
    </BrowserRouter>
  )
}

export { App } 
