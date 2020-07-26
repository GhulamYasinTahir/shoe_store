import React from 'react'
import {BrowserRouter, Route, Link, Outlet} from 'react-router-dom'



const Store=()=>{

    return  (
    <div>
    <h1>Store</h1>
    <Outlet />
    </div>)

}
export default Store;


