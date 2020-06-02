import React, { useState, useRef } from 'react'
import NewTo from '../NewTo';
import { useHistory } from 'react-router-dom';
import InputText from '../InputText';
import './SignIn.style.scss';
import useInput from '../../hooks/useInput';
import { USERNAME } from '../../config';

const SignIn = () => {
    const history = useHistory();
    const [buttonText, setButtonText] = useState('Next');
    const formRef = useRef<HTMLFormElement>(null);
    useInput();

    const validateUser = () => {
        const form = formRef.current as HTMLFormElement;
        const inputUsername = document.querySelector("#inputUsername") as HTMLInputElement;
        setButtonText("Verifying");

        const verifyUsername = () => {
            if (inputUsername.value !== USERNAME) {
                inputUsername.setCustomValidity("Error");
                setButtonText("Next");
                form.classList.add('was-validated'); // bootstrap set validation message
                return;
            }
            history.push('/password');
        }
        setTimeout(verifyUsername, 1000);
    }

    return (
        <div className="row">
            <h1 className="col-12 title title-margin">Sign In</h1>
            <div className="col-12">
                <form className="form" ref={formRef} >
                    <InputText id="inputUsername" label="Username" message="The username is not recognized" />
                    <button type="button" className="btn btn-primary btn-login gutter-top gutter-bottom" onClick={validateUser}>{buttonText}</button>
                </form>
            </div>
            <div className="col-12 gutter-top">
               <NewTo />
            </div>
        </div>
    )
}

export default SignIn;
