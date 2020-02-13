import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ExpenseListItem = ({ description, amount, createAt, id }) => (
    <div>
        {/* { expenses.map(element => 
            <p key = {element.description}>{`${element.description}, ${element.amount}, ${element.createAt}`}</p>
            )
        } */}
        <h3><Link to = {`/edit/${id}`}>{description}</Link></h3>
        <p>
          {numeral(amount / 100).format('$0,0.00')} 
          - 
          {moment(createAt).format('MMMM Do YYYY')}
        </p>
    </div>
);

export default ExpenseListItem;