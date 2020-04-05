import React, { Component } from 'react';
import Aux from '../../hoc/auxiliary';
import Burger from '../../components/Burger/burger';
class BurgerBuilder extends Component{

    state={
        ingredients:{
            "cheese":2,
            "salad":0,
            "tofu":0
        }
    }
    render(){
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <div>Burger Ingredients</div>
            </Aux>
        );
    }
}

export default BurgerBuilder;