import React from 'react';
import { validateAll } from 'indicative';


class Signup extends React.Component{
    constructor() {
        super();
        this.state ={
            name: '',
            email: '',
            password: '',
            passwordConfirm: ''
        };
    }

    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    handleSubmit = (event) => {
        event.preventDefault()
        console.log(this.state)
        // validating user data
        const data = this.state;

        const rules = {
            name: 'required|string',
            email: 'required|email',
            password: 'required|string|min:6'
        }

        validateAll(data, rules)
            .then(() => {})
            .catch(errors => {
                console.log(errors)
            })
    };

    render(){
        return(
            <div className="mh-fullscreen bg-img center-vh p-20" style={{backgroundImage: 'url(assets/img/bg-girl.jpg)'}}>	
                <div className="card card-shadowed p-50 w-400 mb-0" style={{maxWidth: '100%'}}>
                    <h5 className="text-uppercase text-center">Sign up</h5>
                    <br /><br />
                    <form className="form-type-material" onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <input type="text" name="name" onChange={this.handleInputChange} className="form-control" placeholder="Username" />
                        </div>
                        <div className="form-group">
                            <input type="text" name="email" onChange={this.handleInputChange} className="form-control" placeholder="Emailaddress" />
                        </div>
                        <div className="form-group">
                            <input type="password" name="password" onChange={this.handleInputChange} className="form-control" placeholder="Password" />
                        </div>
                        <div className="form-group">
                            <input type="password" name="passwordConfirm" onChange={this.handleInputChange} className="form-control" placeholder="Password (confirm)" />
                        </div>
                        <div className="form-group">
                            <button className="btn btn-bold btn-block btn-primary" type="submit">Register</button>
                        </div>
                    </form>
                    <hr className="w-30" />
                    <p className="text-center text-muted fs-13 mt-20">Already have an account? <a href="login">Sign in</a></p>
                </div>
            </div>                
        );
    }
}

export default Signup;