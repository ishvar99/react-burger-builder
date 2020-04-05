import React from 'react';
import Aux from '../../hoc/auxiliary';

const Layout= (props)=>{
    return (
        <Aux>
            <div>Toolbar, Sidebar, backdrop</div>
            <main>
                {props.children}
            </main>
        </Aux>
    )
}

export default Layout;