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

// a function
// takes in a component
// returns a new enhanced component

const withAnimation = (Component) => {
    const AnimatedComponent = (props) => {
        return (
            <div className="wow bounceInUp">
                <Component {...props}/>
            </div>
        )
    }
    return AnimatedComponent;
}

//Hide an element after showing if for 2 seconds

const withDismiss = (Component) => {
    class DismissableComponent extends React.Component{
        componentDidMount(){
            setTimeout(() => {
                this.props.toogleAlert();
            }, 2000)
        }

        render(){
            return <Component {...this.props} />
        }
    }

    return DismissableComponent;
}

export const AnimatedAlert = withAnimation(Alert);

export const DismissableComponent = withDismiss(AnimatedAlert);

export default Alert;
//export default AnimatedAlert;
//export default DismissableComponent;