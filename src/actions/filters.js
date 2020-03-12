//SET_TEXT

export const setTextFilter = (text = '') => ({
    type: 'SET_TEXT',
    text
});

//SET_SORT_BY_AMOUNT
//options - lowest-biggest (default) || biggest-lowest

export const sortByAmount = (way = 'lowest-biggest') => ({
    type: 'SET_SORT_BY_AMOUNT',
    way
});

//SET_SORT_BY_DATE

export const sortByDate = () => ({
    type: 'SET_SORT_BY_DATE'
});

//SET_START_DATE

export const setStartDate = (date = '') => ({
    type: 'SET_DATE',
    date
});

//SET_END_DATE

export const setEndDate = (date = '') => ({
    type: 'END_DATE',
    date
});
