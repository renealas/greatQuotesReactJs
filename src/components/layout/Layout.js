import React, { Fragment } from 'react'; 

import classes from './Layout.module.css';
import MainNavigation from './MainNavigation';
import MainFooter from './MainFooter';

const Layout = (props) => {
    return(
       <Fragment>
           <MainNavigation />
           <main className={classes.main}>
            {props.children}
           </main>
           <MainFooter />
       </Fragment> 
    );
};

export default Layout;