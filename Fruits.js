import React from 'react';

export default function Fruits(props){
  //const test = props.fruits.forEach()
  const items = [];
  const elements =  props.fruits;
  /*for(const x=0;x<elements.length;x++){
    items.push(<option value={elements[x]}>{elements[x]}</option>)
  }
  elements.forEach(function(item){
    items.push(<option value={item}>{item}</option>)
  });*/
  elements.map((value, index) => {
    items.push(<option value={value}>{value}</option>)
  });
return <select onChange={props.selectedFruitFn}>{items}</select>
}