import React from 'react'

export default function ColorPicker(props){
 const colorbox=props.colorsArray.map((value,index)=>
 {
   return <span onClick={(e)=>props.selectedColor(value)}style={{width:"50px",height:"50px",
   backgroundColor:value,margin:"10px",padding:"10px"}}>{value}</span>
console.log(value)
 })
 


  
  return (colorbox)


}