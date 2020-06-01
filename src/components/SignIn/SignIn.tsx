import React, { useState, useRef, useEffect } from 'react'
import NewTo from '../NewTo';
import { useHistory, useLocation } from 'react-router-dom';
import InputText from '../InputText';
import './SignIn.style.scss';
import useInput from '../../hooks/useInput';

const SignIn: React.FC<{create: boolean}> = ({create}) => {
    const history = useHistory();
    const location = useLocation();
    useInput();
    const [buttonText, setButtonText] = useState('Next');
    const formRef = useRef<HTMLFormElement>(null);
    const user = "johnsmith";

    console.log('LOC', location);

    const validateUser = () => {
        const form = formRef.current as HTMLFormElement;
        const inputUsername = document.querySelector("#inputUsername") as HTMLInputElement;
        setButtonText("Verifying");
        inputUsername.setCustomValidity("");

        const verifyUsername = () => {
            if (inputUsername.value !== user) {
                inputUsername.setCustomValidity("Error");
                setButtonText("Next");
                form.classList.add('was-validated'); // bootstrap set validation message
            } else {
                history.push('/password');
            }
        }
        setTimeout(verifyUsername, 1000);
    }

    return (
        <div className="row content margin-t-6">
            {create && (
                <div className="alert-panel">
                    <div className="alert alert-primary success-alert" role="alert">
                        Account Created Successfully
                    </div>
                </div>
            )}
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
