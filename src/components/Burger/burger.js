import React from 'react';
import BurgerIngredients from './BurgerIngredients/burgeringredients';
import classes from './burger.module.css';


const Burger=(props)=>{
    return (
        <div className={classes.Burger}>
        <BurgerIngredients type='bread-top'/>
        <BurgerIngredients type='cheese'/>
        <BurgerIngredients type='salad'/>
        <BurgerIngredients type='patty'/>
        <BurgerIngredients type='bread-bottom'/>
        </div>
    )
}

export default Burger;