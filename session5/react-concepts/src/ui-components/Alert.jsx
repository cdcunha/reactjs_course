import React from 'react';
import PropTypes from 'prop-types';

const Alert = ({ type, message, children, show, toogleAlert }) =>{
    return (
        <div>
            {
                show &&
                <div onClick={toogleAlert} className={`alert alert-${type}`} role="alert">
                    {message ? message : children}
                </div>
            }
        </div>
    );
}

Alert.propTypes = {
    type: PropTypes.string.isRequired,
    message: PropTypes.string,
    show: PropTypes.bool,
    toogleAlert: PropTypes.func
};


Alert.defaultProps = {
    message: null,
    show: true,
    toogleAlert(){}
};

export default Alert;