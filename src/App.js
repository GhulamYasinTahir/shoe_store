import React from 'react'
import Launch from './components/Launch'
import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About Us'
import DenseAppBar from './NavBar'
import shoes from './components/ShoeArray'
import { Link, BrowserRouter, Routes, Route, useParams } from 'react-router-dom'


const App1=()=>{

    return(
        <BrowserRouter>
        <DenseAppBar/>


<Routes>.
<Route path="Home" element={<Home/>}/>
<Route path="Contact" element={<Contact/>}/>
<Route path="About" element={<About/>}/>
<Route path="Launch" element={<Launch/>}>
    <Route path="/" element={<LaunchIndex/>}/>
    <Route path=":item" element={<LaunchShoe/>}/>
</Route>
</Routes>

</BrowserRouter>
    )
}
export default App1;


/////////////////////////////////////////////////
const LaunchIndex =()=>{

    return(

        <div><h>Welcome to LaunchIndex</h>
        <ul>
            {
                Object.entries(shoes).map(([item,{name,img}])=>{
                 return   (<li key={item}><Link to={`/Launch/${item}`}>
                        <h1>{name}</h1>
                        <img src={img}/>
                        </Link>
                        </li>)
                })
            }
        </ul>
        </div>
    )
}
//////////////////////////////////////////////////////
const LaunchShoe=()=>{
    const {item} = useParams()
    const Shoe = shoes[item]
  if(!Shoe){
      return <h2>Not Found</h2>
  }
  const {name, img} = Shoe;
  return(
<div>
  <h1>{name}</h1>
  <img src={img} alt={name}/>
  </div>
)}

