import React, { useRef } from 'react'
import NewTo from '../NewTo';
import { useHistory } from 'react-router-dom';
import InputText from '../InputText';
import './Password.style.scss';
import useInput from '../../hooks/useInput';

const Password = () => {
    const history = useHistory();
    const formRef = useRef<HTMLFormElement>(null);
    useInput();
    const password = 'password';

    const verify = () => {
        const form = formRef.current as HTMLFormElement;
        const loginPassword = document.querySelector("#loginPassword") as HTMLInputElement;

        setTimeout(() => {
            if (loginPassword.value !== password) {
                loginPassword.setCustomValidity("error");
                form.classList.add('was-validated');
                return;
            }
        }, 1000)
    }

    return (
        <div className="row">
            <div className="col-12 row password-title-margin">
                <h1 className="col-5 title"> <a href="#" onClick={() => history.push('/')}>{"<"}</a> </h1>
                <h1 className="col-7 title">Welcome</h1>
            </div>
            <p className="col-12 body-2 color-grey text-center">johnsmith</p>
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
