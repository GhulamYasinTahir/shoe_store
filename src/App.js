import React from 'react'
import Launch from './components/Launch'
import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About Us'
import DenseAppBar from './NavBar'
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

///////////////////////////////////////////////////////

const shoes = {
    "air-jordan-3-valor-blue": {
      name: "VALOUR BLUE",
      img:
        "https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"
    },
    "jordan-mars-270-london": {
      name: "JORDAN MARS 270 LONDON",
      img:
        "https://secure-images.nike.com/is/image/DotCom/CV3042_001_A_PREM?$SNKRS_COVER_WD$&align=0,1"
    },
    "air-jordan-1-zoom-racer-blue": {
      name: "RACER BLUE",
      img:
        "https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"
    }
  };