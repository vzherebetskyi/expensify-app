import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => (
    <header>
        <h1>Expensify</h1>
         <div>
          <NavLink to = '/' activeClassName = 'is-active' exact = {true}>Go to Dashboard</NavLink>
         </div>
         <div>
          <NavLink to = '/create' activeClassName = 'is-active'>Go to add expense page</NavLink>
         </div>
         <div>
          <NavLink to = '/help' activeClassName = 'is-active'>Go to help page!</NavLink>
         </div>
    </header>
    );

    export default Header;