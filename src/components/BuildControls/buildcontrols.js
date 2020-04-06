import React from 'react';
import classes from './buildcontrols.module.css';
import BuildControl from './BuildControl/buildcontrol'
const BurgerControls=(props)=>{
    return (<div className={classes.BurgerControls}>
        <BuildControl label='cheese'/>
        <BuildControl label='salad'/>
        <BuildControl label='patty'/>
        <BuildControl label='tofu'/>
    </div>)
}

export default BurgerControls;