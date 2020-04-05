import React from 'react';
import classes from './burgeringredients.css';
const BurgerIngredients=(props)=>{

    let ingredients=null;

    switch(props.type){
        case('bread-bottom'):
            ingredients=<div className={classes.BreadBottom}></div>
            break;
        case('bread-top'):
            ingredients=<div className={classes.BreadTop}>
                <div className={classes.Seeds1}></div>
                <div className={classes.Seeds2}></div>
            </div>
            break;
        case('patty'):
            ingredients=<div className={classes.Patty}></div>
            break;
        case('cheese'):
            ingredients=<div className={classes.Cheese}></div>
            break;
        case('salad'):
            ingredients=<div className={classes.Salad}></div>
            break;
        case('tofu'):
            ingredients=<div className={classes.Tofu}></div>
            break;
        default:
            ingredients=null;
    }
}