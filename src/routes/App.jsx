import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Layout from '../components/Layout'
import { Portafolio } from '../pages/Portafolio'
import { Certificados } from '../pages/Certificados'
import { Javascript } from '../pages/Javascript'
import { NotFound } from '../pages/NotFound'


const App = () => {
  return (
    <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Portafolio} />
        <Route exact path="/certificados" component={Certificados} />
        <Route exact path="/javascript" component={Javascript} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
    </BrowserRouter>
  )
}

export { App } 
