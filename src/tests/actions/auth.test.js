import { login, logout } from '../../actions/auth';

test('should set up login object', () => {
    const action = login('sdfkj12NddsMM234HjkLpp9i');
    expect(action).toEqual({
        type: 'LOGIN',
        uid: 'sdfkj12NddsMM234HjkLpp9i'
    });
});

test('should set up login object', () => {
    const action = logout();
    expect(action).toEqual({
        type: 'LOGOUT'
    });
});
