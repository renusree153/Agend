import React from 'react';
import './SignIn.css';
import {Link} from 'react-router-dom';


const SignIn = () => {
    return (
        <div className='container'> 
            <div className='design'>
                <h1> DESIGN GOES HERE
                </h1>
            </div>
            <div className='signIn'>
                <h1> Welcome to Agend! </h1>
                <div className = "account">
                    <h3> Sign In below</h3>
                    <Link to="/home"> Don't have an account? </Link>
                </div>
                <form>
                    <label>
                        Email:
                        <input type="text" name="name" />
                    </label>
                </form>
                <form>
                    <label>
                        Password:
                        <input type="text" name="name" />
                    </label>
                </form>
                <div className = "btn">
                    <button> Sign in</button>
                    <h4> ~ Or Sign in With ~ </h4>
                </div>
                <div>
                    <div className="altOptions">
                        <button id="google">Sign in with Google</button>
                        <button id="facebook">Sign in with Facebook</button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default SignIn;