import React, { useContext, Dispatch, SetStateAction } from 'react'
import './SignIn.style.scss';
import NewTo from '../NewTo';
import { useHistory } from 'react-router-dom';

type Props = {
    setCreate: Dispatch<SetStateAction<boolean>>;
};

const SignIn: React.FC<Props> = ({ setCreate }) => {
    const history = useHistory();

    const user = "johnsmith";

    const handleClick = () => {
        const form = document.querySelector("#form1") as HTMLFormElement;
        // const inputUsername = document.querySelector("#inputUsername") as HTMLInputElement;
        if (user)
        // bootstrap set validation message
        form.classList.add('was-validated');
    }

    return (
        <div className="row content margin-t-6">
            <h1 className="col-12 title title-margin">Sign In</h1>
            <div className="col-12">
                <form id="form1" noValidate>
                    <label className="body-1"> Username </label>
                    <input type="text" className="input-text" id="inputUsername" name="inputUsername" placeholder="Username" required />
                    <div className="invalid-feedback error-message">
                        The username is not recognized
                    </div>
                    <button type="button" className="btn btn-primary btn-login gutter-top gutter-bottom" onClick={handleClick}>Next</button>
                </form>
            </div>
            <div className="col-12">
               <NewTo />
            </div>
        </div>
    )
}

export default SignIn;
