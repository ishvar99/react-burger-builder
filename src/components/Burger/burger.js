import React from 'react';
import BurgerIngredients from './BurgerIngredients/burgeringredients';
import classes from './burger.module.css';


const Burger=(props)=>{
    const transformedIngredients= Object.keys(props.ingredients)
    .map((ig)=>{
        return [...Array(props.ingredients[ig])].map((_,index)=>{
            return <BurgerIngredients key={ig+index} type={ig}/>
        })
    })
    return (
        <div className={classes.Burger}>
        <BurgerIngredients type='bread-top'/>
        {transformedIngredients}
        <BurgerIngredients type='bread-bottom'/>
        </div>
    )
}

export default Burger;