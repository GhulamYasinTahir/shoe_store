import React from 'react'
import {Outlet} from 'react-router-dom'

const Launch=()=>{

    return( 
    <div>
        <h1>Welcom to Launch</h1>
        <Outlet/>
        </div>)
}
export default Launch;