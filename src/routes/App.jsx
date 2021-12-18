import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Layout from '../components/Layout'
import { Portafolio } from '../pages/Portafolio'
import { Certificados } from '../pages/Certificados'


const App = () => {
  return (
    <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Portafolio} />
        <Route exact path="/certificados" component={Certificados} />
      </Switch>
    </Layout>
    </BrowserRouter>
  )
}

export { App } 
