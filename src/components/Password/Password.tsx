import React, { useRef } from 'react'
import NewTo from '../NewTo';
import { useHistory } from 'react-router-dom';
import InputText from '../InputText';
import './Password.style.scss';
import useInput from '../../hooks/useInput';
import { PASSWORD, USERNAME } from '../../config';

const Password = () => {
    const history = useHistory();
    const formRef = useRef<HTMLFormElement>(null);
    useInput();

    const verify = () => {
        const form = formRef.current as HTMLFormElement;
        const loginPassword = document.querySelector("#loginPassword") as HTMLInputElement;

        setTimeout(() => {
            if (loginPassword.value !== PASSWORD) {
                loginPassword.setCustomValidity("error");
                form.classList.add('was-validated');
                return;
            }
        }, 1000)
    }

    return (
        <div className="row">
            <div className="col-12 row password-title-margin">
                <h1 className="col-5 title back-button"> <a href="#" onClick={() => history.push('/')}>{"<"}</a> </h1>
            </div>
                <h1 className="col-12 title text-center">Welcome</h1>
            <p className="col-12 body-2 color-grey text-center">{USERNAME}</p>
            <div className="col-12 password-input-margin">
                <form className="form" ref={formRef}>
                    <InputText type="password" id="loginPassword" label="Password" message="Invalid credentials" />
                    <button type="button" className="btn btn-primary btn-login gutter-top gutter-bottom" onClick={verify}>Sign In</button>
                </form>
            </div>
            <div className="col-12 gutter-top">
                <NewTo />
            </div>
        </div>
    )
}
export default Password;
