import React from 'react';
import {NavLink} from 'react-router-dom';
import { connect } from 'react-redux';

import { startLogout } from '../actions/auth';

export const Header = ({ startLogout }) => (
<header>
    <h1>Expensify</h1>
    <div>
        <NavLink to = '/dashboard' activeClassName = 'is-active' exact = {true}>Go to Dashboard</NavLink>
    </div>
    <div>
        <NavLink to = '/create' activeClassName = 'is-active'>Go to add expense page</NavLink>
    </div>
    <div>
        <NavLink to = '/help' activeClassName = 'is-active'>Go to help page!</NavLink>
    </div>
    <button onClick = { startLogout }>Logout</button>
</header>
);

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
})

export default connect(undefined, mapDispatchToProps)(Header);