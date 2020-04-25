import React, {Component} from 'react';
import './components.css';
import Left from './Left';
import Center from './Center';
import Right from './Right';
import { CSSTransition } from "react-transition-group";

class Main extends Component{

    constructor(){
        super();
        this.state = {
            grow: 0, 
            border: '3px'
        }
    }

    updateDimensions() {
        console.log(window.innerWidth)
        if(window.innerWidth < 700) {
          this.setState({grow: 0, border: '0px'});
          
        }
        else if(window.innerWidth>=700 && window.innerWidth<=1000){
            this.setState({grow: 1, border: '3px'});
        }
        else{
            this.setState({grow:2, border: '3px'});
        }
    }
    componentDidMount() {
        this.updateDimensions();
        window.addEventListener("resize", this.updateDimensions.bind(this));
    }
    
    
    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions.bind(this));
    }

    render(){
        return(
            <div className="main">
                <Left grow = {this.state.grow} border = {this.state.border}/>
                <Center />
                <Right grow = {this.state.grow} border = {this.state.border}/>
            </div>        
        )
    }
    
}
export default Main;