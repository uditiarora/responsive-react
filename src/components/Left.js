import React from 'react';

function Left(props){
    return(
        <div className="left" style = {{flexGrow: props.grow, borderWidth: props.border }}>
            
        </div>
    )
}
export default Left;