import React from 'react';
import Auth from './useAuth';

const Login = () => {
    const auth = Auth();
    console.log(auth);
    return (
        <div>
            <h1>join the party !!!</h1>
            {
                auth.user ? <button onClick={auth.signOut}>sign out</button> :
                <button onClick={auth.singInWithGoogle}>Sign in with google</button>
            }
        </div>
    );
};

export default Login;