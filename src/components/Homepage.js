import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Home from '../pages/Home.js';
import Landings from '../pages/Landings.js';
//  router : logo, links and the button 
export default () => {


    return (
        <>
            <Router>
               <header className='header container'>
                   <div className='logo'>
                       <Link to='/'>
                           <p className='logo-text'>Lankit.</p>
                       </Link>
                   </div>
                   <div className='listings'>
                   <Link to='/landings'>
                        Landings
                   </Link>
                   <Link to='/pages'>
                       Pages
                   </Link> 
                   <Link to='/account'>
                       Account
                   </Link> 
                   <Link to='documentation'>
                       Documentation
                   </Link>
                   </div>
                   
                   <button className='btn'>Buy Now</button>
               </header>

                <Switch>
                    <Route exact path='/' >
                        <Home/>
                    </Route>
                    <Route path='/landings'>
                        <Landings />
                    </Route>
                </Switch>
               </Router>
        </>
    )
}