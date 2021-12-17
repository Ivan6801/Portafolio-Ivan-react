import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Portafolio } from '../pages/Portafolio'
import Layout from '../components/Layout'

const App = () => {
  return (
    <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Portafolio} />
      </Switch>
    </Layout>
    </BrowserRouter>
  )
}

export { App } 
