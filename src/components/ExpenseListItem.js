import React from 'react';
import { Link } from 'react-router-dom';

const ExpenseListItem = ({ description, amount, createAt, id }) => (
    <div>
        {/* { expenses.map(element => 
            <p key = {element.description}>{`${element.description}, ${element.amount}, ${element.createAt}`}</p>
            )
        } */}
        <h3><Link to = {`/edit/${id}`}>{description}</Link></h3>
        <p>{amount}, {createAt}</p>
    </div>
);

// const connectedExpenseListItem = (state) => {
//     return {
//         expenses: state.expenses
//     };
// };

export default ExpenseListItem;
// export default ExpenseListItem;