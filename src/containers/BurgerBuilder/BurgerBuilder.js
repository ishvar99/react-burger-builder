import React, { Component } from 'react';
import Aux from '../../hoc/auxiliary';
import Burger from '../../components/Burger/burger';
import BuildControls from '../../components/BuildControls/buildcontrols'
import Modal from '../../components/UI/Modal/modal'
import OrderSummary from '../../components/OrderSummary/ordersummary';
class BurgerBuilder extends Component{
    state={
        ingredients:{
            "cheese":0,
            "salad":0,
            "patty":0,
            "tofu":0
        },
        purchasable:false,
        totalPrice:0
    }
    ingredientPrices={
        "cheese":50,
        "salad":30,
        "patty":25,
        "tofu":20
    }
    updatePurchaseState=(price)=>{
        if(price>0)
            this.setState({
                purchasable:true
            })
        else
            this.setState({
                purchasable:false
            })
    }
    addIngredientHandler=(type)=>{
        const updatedIngredients={...this.state.ingredients}
        updatedIngredients[type]=updatedIngredients[type]+1;
        let updatedPrice=this.state.totalPrice;
        updatedPrice+=this.ingredientPrices[type];
        this.setState({
            ingredients:updatedIngredients,
            totalPrice:updatedPrice,
            disableLessButton:false
        })
        this.updatePurchaseState(updatedPrice);
    }
    removeIngredientHandler=(type)=>{
        const updatedIngredients={...this.state.ingredients}
        updatedIngredients[type]=updatedIngredients[type]-1<0?0:updatedIngredients[type]-1;
        let updatedPrice=this.state.totalPrice;
        updatedPrice-=this.ingredientPrices[type];
        this.setState({
            ingredients:updatedIngredients,
            totalPrice:updatedPrice,
            disableLessButton:updatedIngredients[type]===0?true:false
        })
        this.updatePurchaseState(updatedPrice);
    }
    render(){
        const disableInfo={...this.state.ingredients};
        for(let key in disableInfo){
            disableInfo[key]=disableInfo[key]===0?true:false;
        }
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <Modal>
                    <OrderSummary ingredients={this.state.ingredients}/>
                </Modal>
                <BuildControls 
                disableLessButton={disableInfo}
                purchasable={this.state.purchasable}
                price={this.state.totalPrice}
                addIngredient={this.addIngredientHandler}
                removeIngredient={this.removeIngredientHandler}
                />
            </Aux>
        );
    }
}

export default BurgerBuilder;                  