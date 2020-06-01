import React, { Dispatch, SetStateAction, useState } from 'react'
import './SignIn.style.scss';
import NewTo from '../NewTo';
import { useHistory } from 'react-router-dom';

type Props = {
    setCreate: Dispatch<SetStateAction<boolean>>;
};

const SignIn: React.FC<Props> = ({ setCreate }) => {
    const history = useHistory();
    const [buttonText, setButtonText] = useState('Next');
    const user = "johnsmith";

    const validateUser = () => {
        const form = document.querySelector("#form1") as HTMLFormElement;
        const inputUsername = document.querySelector("#inputUsername") as HTMLInputElement;

        setButtonText("Verifying");
        inputUsername.setCustomValidity("");

        setTimeout(() => {
            if (inputUsername.value !== user) {
                inputUsername.setCustomValidity("Error");
                setButtonText("Next");

                // bootstrap set validation message
                form.classList.add('was-validated');
            } else {
                history.push('/password');
            }
        }, 1000);
       
    }

    return (
        <div className="row content margin-t-6">
            <h1 className="col-12 title title-margin">Sign In</h1>
            <div className="col-12">
                <form id="form1" noValidate>
                    <label className="body-1"> Username </label>
                    <input type="text" className="input-text" id="inputUsername" placeholder="Username" required />
                    <div className="invalid-feedback error-message">
                        The username is not recognized
                    </div>
    <button type="button" className="btn btn-primary btn-login gutter-top gutter-bottom" onClick={validateUser}>{buttonText}</button>
                </form>
            </div>
            <div className="col-12">
               <NewTo />
            </div>
        </div>
    )
}

export default SignIn;
