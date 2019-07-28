// higher order component (HOC) - A component (HOC) that renders another component
//reuse code
//prop manipulation
//render hijacking
//abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p> the info is : {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
        {props.isAdmin && <p>this is private info! don't share</p>}
        <WrappedComponent {...props} />
        </div>
    );
};

const AdminInfo = withAdminWarning(Info);

ReactDOM.render(<AdminInfo isAdmin={true} info='this is some info' />, document.getElementById('app'));