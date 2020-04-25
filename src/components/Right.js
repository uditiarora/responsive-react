import React from 'react';

function Right(props){
    return(
        <div className="right" style = {{flexGrow: props.grow , borderWidth:props.border}}>
        </div>
    )
}
export default Right;