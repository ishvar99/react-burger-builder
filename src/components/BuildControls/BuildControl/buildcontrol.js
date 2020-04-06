import React from 'react';
import classes from './buildcontrol.module.css';
const BuildControl=(props)=>{
    return (
    <div className={classes.BuildControl}>
            <div>
               <p className={classes.Label}>{props.label}</p> 
            </div>
            <button className={classes.More} onClick={()=>props.addIngredient(props.type)}>More</button>
            <button className={classes.Less} onClick={()=>props.removeIngredient(props.type)}>Less</button>
        </div>
    )
}
export default BuildControl;