import authReducer from '../../reducers/auth';

test('should login a user', () => {
    const uid = 'rt23Tjbnb56Qgfjk78MMjjh';
    const action = {
        type: 'LOGIN',
        uid
    };
    const state = authReducer({}, action);
    expect(state).toEqual({ uid });
});

test('should logout a user', () => {
    const action = {
        type: 'LOGOUT',
    };
    const state = authReducer({ uid: 'rt23Tjbnb56Qgfjk78MMjjh' }, action);
    expect(state).toEqual({});
});
