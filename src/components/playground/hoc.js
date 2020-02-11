import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: { props.info }</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            { props.isAdmin && <p>This is private info. Pls don't share!</p> }
            <WrappedComponent {...props} />
        </div>
    );
};

const requireAuthentification = (WrappedComponent) => {
    return (props) => (
        <div>
            { props.isAuth ? <WrappedComponent {...props} /> : <p>You need to authentificate!</p> }
        </div>
    );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentification(Info);

// ReactDOM.render(<AdminInfo isAdmin = { true } info = 'testing' />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuth = { true } info = 'testing' />, document.getElementById('app'));