import React from 'react';
import Aux from '../../hoc/auxiliary';
import classes from './layout.module.css';

const Layout= (props)=>{
    return (
        <Aux>
            <div>Toolbar, Sidebar, backdrop</div>
            <main className={classes.Content}>
                {props.children}
            </main>
        </Aux>
    )
}

export default Layout;