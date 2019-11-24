import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import Fruits from './Fruits';
import Basket from './Basket';
import Button from './Button';
import ColorPicker from './ColorPicker';
import ApplySelectedColor from './ApplySelectedColor';
import ImagePicker from './ImagePicker';
class App extends Component {
  constructor() {
    super();
    this.state = {
      fruits: ['fruit1','fruit2','fruit3'],
      selectedFruitValue : 'fruit1',
      basketList: [],
      selectedColor:'',
     colorsArray:['Grey','Pink','Orange','Yellow','Green','Black'],
     bgArray:['https://images.unsplash.com/photo-1513366208864-87536b8bd7b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80','https://images.unsplash.com/photo-1517867065801-e20f409696b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1502&q=80','https://images.unsplash.com/photo-1498575207492-cfbed56146c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1402&q=80'],
    };
   
  }

selectedFruit(e) {
  let {name, value} = e.target;
  this.setState({
  selectedFruitValue: value,
});
};

addOrRemove(value){
  let basketArray = this.state.basketList;
  if(value == 'add'){
    basketArray.push(this.state.selectedFruitValue);
    this.setState({
      basketList : basketArray,
    });
  }else{
    const removeVal = basketArray.lastIndexOf(this.state.selectedFruitValue);
    let reomovedBasketList = basketArray.splice(removeVal, 1);
    this.setState({
      basketList : reomovedBasketList,
    });
  }
}

colorPickerFn(color){
  let colorPicked=color;
  this.setState({
    selectedColor:color
  })
}

  render() {
    return (
      <div>
        <ImagePicker selectedColor={(e) => this.colorPickerFn(e)} imageArray={this.state.bgArray}/>
        <ApplySelectedColor image={this.state.selectedColor} selectedColor={(e) => this.colorPickerFn(e)}/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
