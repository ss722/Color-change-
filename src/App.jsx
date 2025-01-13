import { useState } from 'react'
import './App.css'

function App() {
 const [backgroundColor,setBackgroundColor] = useState("#ffffff");
 const colors = ["#FFFF00","#FF0000","#4d33ff","#100465","#6cba2b","#2bb7ba"];
 function setcolor(color){
    setBackgroundColor(color);
 }
 return(
  <div style={{backgroundColor}} className='app'>

    <h1>Color Picker</h1>
      <div className='array' >
       {colors.map((color,index)=>{
        return (<div className='each-color' key = {index} 
          style={{backgroundColor:color}}
          onClick={()=>setcolor(color)}
        > </div>
        )
       })}
      </div>

      <div className='custom-color'>
       <input type='color' value={backgroundColor} onChange={(e)=>setcolor(e.target.value)}></input>
      </div>
  </div>
 )
}

export default App
