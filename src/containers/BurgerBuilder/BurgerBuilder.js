import React, { Component } from 'react';
import Aux from '../../hoc/auxiliary';
import Burger from '../../components/Burger/burger';
import BuildControls from '../../components/BuildControls/buildcontrols'
class BurgerBuilder extends Component{
    state={
        ingredients:{
            "cheese":0,
            "salad":0,
            "patty":0,
            "tofu":0
        },
        ingredientPrice:{
            "cheese":50,
            "salad":30,
            "patty":25,
            "tofu":20
        },
        totalPrice:0
    }
    addIngredientHandler=(type)=>{
        const updatedIngredients={...this.state.ingredients}
        updatedIngredients[type]=updatedIngredients[type]+1;
        let updatedPrice=this.state.totalPrice;
        updatedPrice+=this.state.ingredientPrice[type];
        this.setState({
            ingredients:updatedIngredients,
            totalPrice:updatedPrice
        })
    }
    removeIngredientHandler=(type)=>{
        const updatedIngredients={...this.state.ingredients}
        updatedIngredients[type]=updatedIngredients[type]-1<0?0:updatedIngredients[type]-1;
        let updatedPrice=this.state.totalPrice;
        updatedPrice-=this.state.ingredientPrice[type];
        this.setState({
            ingredients:updatedIngredients,
            totalPrice:updatedPrice
        })
    }
    render(){
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls 
                addIngredient={this.addIngredientHandler}
                removeIngredient={this.removeIngredientHandler}
                />
            </Aux>
        );
    }
}

export default BurgerBuilder;                  