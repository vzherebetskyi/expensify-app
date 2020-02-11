//Expenses Reducer

const expensesReducerDefaultState = [];

export default (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
          return [
              ...state,
              action.expense
            ];
        case 'REMOVE_EXPENSE':
          return state.filter(({ id }) => id !== action.expense.id);
        case 'EDIT_EXPENSE':
          return state.map((object) => object.id === action.id ?{...object, ...action.updates} : object
          );
        // case 'SET_SORT_BY_AMOUNT':
        //   return action.way === 'lowest-biggest' ? state.sort((a,b) => a.amount - b.amount) : state.sort((a,b) => b.amount - a.amount);
        default: 
         return state;
    }
};