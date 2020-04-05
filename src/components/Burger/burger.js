import React from 'react';
import BurgerIngredients from './BurgerIngredients/burgeringredients';
import classes from './burger.module.css';


const Burger=(props)=>{
    Object.values(props.ingredients)
    const transformedIngredients= Object.keys(props.ingredients)
    .map((ig)=>{
        return [...Array(props.ingredients[ig])].map((_,index)=>{
            return <BurgerIngredients key={ig+index} type={ig}/>
        })
    }).reduce((arr,el)=>{
        return arr.concat(el);
    },[]);
    return (
        <div className={classes.Burger}>
        <BurgerIngredients type='bread-top'/>
        {transformedIngredients.length===0?<p>Please start adding ingredients</p>:transformedIngredients}
        <BurgerIngredients type='bread-bottom'/>
        </div>
    )
}

export default Burger;