import moment from 'moment';

export const expenses = [{
    id: '1',
    description: 'Food',
    note: '',
    amount: 200,
    createAt: 0
},{
    id: '2',
    description: 'Water',
    note: '',
    amount: 51500,
    createAt: moment(0).subtract(4, 'days').valueOf()
}, {
    id: '3',
    description: 'Municipal Services',
    note: '',
    amount: 40000,
    createAt: moment(0).add(4, 'days').valueOf()
}, {
    id: '4',
    description: 'Rent',
    note: '',
    amount: 80000,
    createAt: moment(0).add(8, 'days').valueOf()
}];

export const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

export const altFilters = {
    text: 'bills',
    sortBy: 'amount',
    startDate: moment(0),
    endDate: moment(0).add(3, 'days')
}