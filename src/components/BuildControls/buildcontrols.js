import React from 'react';
import classes from './buildcontrols.module.css';
import BuildControl from './BuildControl/buildcontrol'
const BuildControls=(props)=>{
    const controls=[
        {label:'Cheese',type:'cheese'},
        {label:'Salad',type:'salad'},
        {label:'Patty',type:'patty'},
        {label:'Tofu',type:'tofu'}
    ]
    return (
    <div className={classes.BuildControls}>
        <p>Current Price : <strong>₹{props.price}</strong></p>
        {controls.map((ing)=>{
           return <BuildControl 
           disableLessButton={props.disableLessButton}
           addIngredient={props.addIngredient}
           removeIngredient={props.removeIngredient} 
           key={ing.label}
            type={ing.type} 
            label={ing.label}/>    
        })}
    </div>
    )
}

export default BuildControls;