import React from 'react'

export default function ApplySelectedColor(props){

 


  
  return (
    <>
    <div style={{width:"50px",height:"50px",backgroundImage: "url("+props.image+")",
   backgroundColor:'',margin:"10px",padding:"10px"}}>{props.color}</div>
   <button onClick={(e)=>props.selectedColor('')}>clear</button>
   </>
   )



}