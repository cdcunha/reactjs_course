import React from 'react';


class Signup extends React.Component{
    constructor() {
        super();
        this.state ={
            name: '',
            email: '',
            password: '',
            passwordConfirm: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    render(){
        return(
            <div className="mh-fullscreen bg-img center-vh p-20" style={{backgroundImage: 'url(assets/img/bg-girl.jpg)'}}>	
                <div className="card card-shadowed p-50 w-400 mb-0" style={{maxWidth: '100%'}}>
                    <h5 className="text-uppercase text-center">Sign up</h5>
                    <br /><br />
                    <form>
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