import React, { Component } from 'react';
import Aux from '../../hoc/auxiliary';
import Burger from '../../components/Burger/burger';
class BurgerBuilder extends Component{
    render(){
        return (
            <Aux>
                <Burger/>
                <div>Burger Ingredients</div>
            </Aux>
        );
    }
}

export default BurgerBuilder;