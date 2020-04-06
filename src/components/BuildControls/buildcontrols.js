import React from 'react';
import classes from './buildcontrols.module.css';
import BuildControl from './BuildControl/buildcontrol'
const BurgerControls=(props)=>{

    return (<div classtype={classes.BurgerControls}>
        <BuildControl clicked={(type)=>props.clicked(type)} label='cheese'/>
        <BuildControl clicked={(type)=>props.clicked(type)} label='salad'/>
        <BuildControl clicked={(type)=>props.clicked(type)} label='patty'/>
        <BuildControl clicked={(type)=>props.clicked(type)} label='tofu'/>
    </div>)
}

export default BurgerControls;