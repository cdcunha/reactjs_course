import React from 'react';
import PropTypes from 'prop-types';

const Alert = ({ type, message, children, show }) =>{
    return (
        <div>
            {
                show &&
                <div className={`alert alert-${type}`} role="alert">
                    {message ? message : children}
                </div>
            }
        </div>
    );
}

Alert.propTypes = {
    type: PropTypes.string.isRequired,
    message: PropTypes.string,
    show: PropTypes.bool
};


Alert.defaultProps = {
    message: null,
    show: true
}

export default Alert;