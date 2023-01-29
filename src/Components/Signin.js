import React from 'react';

class Signin extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      username: '',
      password: '',
      passwordConfirmation: '',
      email: '',
      errors: []
    };

    this.validateUsernameonBlur = this.validateUsernameonBlur.bind(this);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitting form...");
    console.log(event);
  }

  validateUsernameonBlur = (event) => {
    console.log("I should validate whatever is in", event.target.value);
  }

  render() {
    return (
      <div className="wrapper">
         <form onSubmit={this.handleSubmit}>
          <input 
            type='text'
            name='username'
            id='username'
            placeholder='Username'
            onBlur={this.validateUsernameonBlur}
          />
           <input 
            type='text'
            name='password'
            id='passWord'
            placeholder='Password'
          />
           <input 
            type='text'
            name='passwordConfirmation'
            id='passwordConfirmation'
            placeholder='Password Confirmation'
          />
           <input 
            type='text'
            name='email'
            id='email'
            placeholder='Email'
          />
          <button type="Submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default Signin;