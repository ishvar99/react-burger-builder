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
        }
    }
    onClickHandler=(type)=>{
        if(type==='cheese'){
            this.setState({
                ingredients:{
                    'cheese':this.state.ingredients['cheese']+1,
                    'salad':this.state.ingredients['salad'],
                    'patty':this.state.ingredients['patty'],
                    'tofu':this.state.ingredients['tofu']
                }
            })
        }
        else if(type==='salad'){
            this.setState({
                ingredients:{
                    'cheese':this.state.ingredients['cheese'],
                    'salad':this.state.ingredients['salad']+1,
                    'patty':this.state.ingredients['patty'],
                    'tofu':this.state.ingredients['tofu']
                }
            })
        }
        else if(type==='patty'){
            this.setState({
                ingredients:{
                    'cheese':this.state.ingredients['cheese'],
                    'salad':this.state.ingredients['salad'],
                    'patty':this.state.ingredients['patty']+1,
                    'tofu':this.state.ingredients['tofu']
                }
            })
        }
        else if(type==='tofu'){
            this.setState({
                ingredients:{
                    'cheese':this.state.ingredients['cheese'],
                    'salad':this.state.ingredients['salad'],
                    'patty':this.state.ingredients['patty'],
                    'tofu':this.state.ingredients['tofu']+1
                }
            })
        }
    }
    render(){
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls clicked={(type)=>this.onClickHandler(type)}/>
            </Aux>
        );
    }
}

export default BurgerBuilder;                  