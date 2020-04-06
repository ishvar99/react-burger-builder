import React from 'react';
import classes from './buildcontrol.module.css';
const BuildControl=(props)=>{
    return (
    <div className={classes.BuildControl}>
            <div>
               <p>{props.label}</p> 
            </div>
            <button onClick={()=>props.clicked(props.label)}>More</button>
            <button onClick={()=>props.clicked(props.label)}>Less</button>
        </div>
    )
}
export default BuildControl;