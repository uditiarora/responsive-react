import React from 'react';
import './components.css';
import Left from './Left';
import Center from './Center';
import Right from './Right';
function Main(){
    return(
        <div className="main">
            <Left />
            <Center />
            <Right />
        </div>        
    )
}
export default Main;