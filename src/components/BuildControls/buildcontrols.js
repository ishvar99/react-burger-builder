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
         <button disabled={!props.purchasable} className={classes.OrderButton}>ORDER NOW</button>
    </div>
       
    )
}

export default BuildControls;