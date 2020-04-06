import React from 'react';
import classes from './buildcontrol.module.css';
const BuildControl=(props)=>{
    return (
        <div className={classes.BuildControl}>
            <div>
               <p>{props.label}</p> 
            </div>
            <button>Add</button>
            <button>Remove</button>
        </div>
    )
}
export default BuildControl;