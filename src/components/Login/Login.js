import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const {user, signInWithGoogle}=useFirebase();
    console.log(user);
    return (
        <div>
         <h3>Login Now</h3>
            <form >
                <input type="email" name="" placeholder='Your Email' id="" /><br />
                <input type="password" name="" placeholder='Your password' id="" /><br />
                <input type="submit" value="Login" /><br />
                <br />
            </form>
            <button onClick={signInWithGoogle}>Sign In with Google</button>
        </div>
    );
};

export default Login;