import React, { useRef, Dispatch, SetStateAction, useEffect } from 'react';
import InputText from '../InputText';
import NewTo from '../NewTo';
import { useHistory } from 'react-router-dom';
import useInput from '../../hooks/useInput';

const CreateAccount: React.FC<{ setCreate: Dispatch<SetStateAction<boolean>> }> = ({ setCreate }) => {
    const formRef = useRef<HTMLFormElement>(null);
    const history = useHistory();
    useInput();

    const validateUser = () => {
        const form = formRef.current as HTMLFormElement;
        let usernameSame = true;
        let passwordSame = true;
        const username = document.querySelector(`#username`) as HTMLInputElement;
        const confirmUsername = document.querySelector(`#confirmUsername`) as HTMLInputElement;

        const password = document.querySelector(`#password`) as HTMLInputElement;
        const confirmPassword = document.querySelector(`#confirmPassword`) as HTMLInputElement;

        confirmUsername.setCustomValidity("");
        confirmPassword.setCustomValidity("");

        if (username.value !== confirmUsername.value){
            confirmUsername.setCustomValidity("error")
            usernameSame = false;
        }

        if (password.value !== confirmPassword.value){
            confirmPassword.setCustomValidity("error")
            passwordSame = false;
        }
        
        form.classList.add('was-validated');

        if (form.checkValidity() && usernameSame && passwordSame){
            history.push('/');
            setCreate(true);
        }
    }

    useEffect(() => {
        setCreate(false);
    }, []);

    return (
        <div className="row">
            <form className="form" ref={formRef}>
                <h1 className="col-12 title title-margin">Create account</h1>
                <div className="col-12 d-flex">
                    <div className="col-6 pl-0">
                        <InputText id="firstName" label="First name" message="Please enter your first name" required />
                    </div>
                    <div className="col-6 pr-0">
                        <InputText id="lasttName" label="Last name" message="Please enter your last name"required />
                    </div>
                </div>
                <div className="col-12 gutter-top">
                    <InputText id="username" label="Username" message="Please enter your Userrname" required/>
                </div>
                <div className="col-12 gutter-top">
                    <InputText id="confirmUsername" label="Re-type username" message="Please enter same Username" required/>
                </div>
                <div className="col-12 gutter-top">
                    <InputText type="password" id="password" label="Password" message="Please enter your Password" required/>
                </div>
                <div className="col-12 gutter-top">
                    <InputText type="password" id="confirmPassword" label="Re-type password" message="Please enter same password" required/>
                </div>
                <div className="col-12 gutter-top">
                    <button type="button" className="btn btn-primary btn-login gutter-top gutter-bottom" onClick={validateUser}>Create Account</button>
                </div>
                <div className="col-12 gutter-top">
                    <NewTo existing/>
                </div>
            </form>
        </div>
    )
}

export default CreateAccount;
