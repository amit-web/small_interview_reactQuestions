import React from 'react'
import { Outlet } from 'react-router-dom'
import Head from './Head'

const RoutingExample = () => {
  return (
    <div>
           <h1>Routing Example</h1>
           <Head />
          <Outlet/>

    </div>
  )
}

export default RoutingExample