import React from 'react';
import './SignUp.css';
import {Link} from 'react-router-dom';


const SignIn = () => {
    return (
        <div className='container'> 
            <div className='design'>
                <h1> DESIGN GOES HERE
                </h1>
            </div>
            <div className='signUp'>
                <h1> Welcome to Agend! </h1>
                <div className = "account">
                    <h3> Register below </h3>
                    <Link to="/home"> Already have an account? </Link>
                </div>
                <form>
                    <label>
                        Name:
                        <input type="text" name="name" />
                    </label>
                </form>
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
                    <button> Sign Up </button>
                    <h4> ~ Or Sign Up With ~ </h4>
                </div>
            </div>
        </div>
    )
};

export default SignIn;