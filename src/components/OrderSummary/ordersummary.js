import React from 'react';
import Aux from '../../hoc/auxiliary';
const OrderSummary=(props)=>{
const ingredientSummary=Object.keys(props.ingredients).map((ing)=>{
        return (
                <li><span style={{textTransform:'capitalize'}}>{ing}</span>: {props.ingredients[ing]}</li>
            )
    })
    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
        </Aux>
    )
}

export default OrderSummary