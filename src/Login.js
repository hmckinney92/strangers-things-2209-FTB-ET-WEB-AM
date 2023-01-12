import React, {useState , useEffect} from 'react';

const Login = (props) => {

  const exchangeTokenForUser = props.exchangeTokenForUser
  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  

  const login=(ev)=> {

    ev.preventDefault();
    console.log('login')
    fetch('https://strangers-things.herokuapp.com/api/2209-ftb-et-web-am/users/login', {
  method: "POST",
  headers: {
    'Content-Type': 'application/json'

  },

  body: JSON.stringify({
    user: {
      username: loginUsername,
      password: loginPassword
    }

  })

})
  .then(response => response.json())
  .then(result => {
    if(!result.success){
      throw result.error;

    }

    const token = result.data.token;
    window.localStorage.setItem('token', token);
    exchangeTokenForUser();

  })

  .catch(err => console.log(err));
  
  }

  return (
    <form className="loginBox" onSubmit= { login }>
      <h3>Login</h3>
    
      <input 
        placeholder="username" 
        value={ loginUsername }
        onChange ={ ev => setLoginUsername(ev.target.value)}/>

      <input 
        type="password"
        value={ loginPassword }
        onChange ={ ev => setLoginPassword(ev.target.value)}/>

        <button>Login</button>
        
    </form>
  );
 
}


  export default Login;