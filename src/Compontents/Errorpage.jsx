import React from 'react'
import { useRouteError } from 'react-router-dom'

function Errorpage() {

    const error = useRouteError()
    console.error(error)
  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
        <h1>opps something happened</h1>
        <p>{error.statusText || error.meassage} </p>
    </div>
  )
}

export default Errorpage