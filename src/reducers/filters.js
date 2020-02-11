import moment from 'moment';

//Filters Reducer


const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
};

export default (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT':
        return {...state, text: action.text};
        case 'SET_SORT_BY_AMOUNT':
        return {...state, sortBy: 'amount'};
        case 'SET_SORT_BY_DATE':
        return {...state, sortBy: 'date'};
        case 'SET_DATE':
        // let d = new Date();
        //     action.date === '' ? state.startDate = `${d.getMonth() + 1}.${d.getDate()}.${d.getFullYear()}` : state.startDate = new Date(action.date);
        return {...state,
        startDate: action.date};
        case 'END_DATE':
        // d = new Date();
        //     action.date === '' ? state.endDate = `${d.getMonth() + 1}.${d.getDate()}.${d.getFullYear()}` : state.endDate = new Date(action.date);
        return {...state,
            endDate: action.date};;
        default:
        return state;
    }
};