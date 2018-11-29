import React from 'react';

const Alert = ({ type, message, children }) =>{
    return (
        <div className={`alert alert-${type}`} role="alert">
            {message ? message : children}
        </div>
    );
}

export default Alert;