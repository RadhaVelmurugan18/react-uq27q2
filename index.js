import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import Fruits from './Fruits';
import Basket from './Basket';
import Button from './Button';
import ColorPicker from './ColorPicker';
import ApplySelectedColor from './ApplySelectedColor';
class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
      fruits: ['fruit1','fruit2','fruit3'],
      selectedFruitValue : '',
      basketList: [],
      selectedColor:'',
     colorsArray:['Grey','Pink','Orange','Yellow','Green','Black']
    };
   
  }

selectedFruit() {
  const index = event.target.selectedIndex;
  let selectedOption = event.target.options[index].value;
  this.setState({selectedFruitValue:selectedOption,});
  /*this.setState((state)=> {return selectedFruitValue = selectedOption});*/
};

addOrRemove(value){
  console.log(value);

}

colorPickerFn(color){

  let colorPicked=color;
  this.setState({
    selectedColor:color
  })
  console.log('check',color);
}

  render() {
    return (
      <div>
  
       
        <ColorPicker 
        selectedColor={(e)=>this.colorPickerFn(e)}
        colorsArray={this.state.colorsArray} />
        <ApplySelectedColor color={this.state.selectedColor}  selectedColor={(e)=>this.colorPickerFn(e)}/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
