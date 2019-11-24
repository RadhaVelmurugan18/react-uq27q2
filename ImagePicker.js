import React from 'react'

export default function ImagePicker(props){
 const colorbox=props.imageArray.map((value,index)=>
 {
   return <div onClick={(e)=>props.selectedColor(value)} value={value} style={{ width:'100px',height:'100px',backgroundImage: "url("+value+")"}}></div>
 }) 
  return (colorbox)
}