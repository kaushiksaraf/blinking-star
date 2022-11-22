import { useState } from 'react'
import reactLogo from './assets/react.svg'
import {StarIcon} from "@heroicons/react/24/outline"
import './App.css'

function App() {
  const [toggle, setToggle] = useState(false)

  const handleStar=(e)=>{
  
  
    setInterval(()=> {
      
      toggle ?
      e.target.style.fill="pink"
      : e.target.style.fill="skyblue"
      setToggle(toggle=>!toggle)
    },2000)
    }

  return (
    <div className="App">
     
      <p className="click-star">
        Click on the Star to Blink
      </p>
      <StarIcon className="star" style={{width:"150px"}} onClick={(e)=>
     {handleStar(e)}} />
    </div>
  )
}

export default App
