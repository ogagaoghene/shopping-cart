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
  }
  render() {
    return (
      <div className="wrapper">
         <form>
          <input 
            type='text'
            name='username'
            id='username'
            placeholder='Username'
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