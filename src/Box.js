import React, { Component } from 'react'
import './Box.css'
class Box extends Component{

constructor(props){
    super(props)
    this.state={
currentColor:this.props.color
    }


}


changeColor= ()=>{
  const myArray = this.props.colors
const index =Math.floor(Math.random()*myArray.length)

     this.setState({currentColor:this.props.colors[index]})


}



render(){

    return(
        <div onClick={this.changeColor} className="Box" style={{backgroundColor:this.state.currentColor}}></div>
    )
}
}
export default Box