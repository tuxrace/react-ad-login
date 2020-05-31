import React, { useContext, Dispatch, SetStateAction } from 'react'
import './SignIn.style.scss';
import { LoginContext } from '../Login/Login';
import NewTo from '../NewTo';
import { useHistory } from 'react-router-dom';

type Props = {
    setCreate: Dispatch<SetStateAction<boolean>>;
};

const SignIn: React.FC<Props> = ({ setCreate }) => {
    const history = useHistory();

    const user = "johnsmith";

    const verifyUser = () => {
        setTimeout(() => {

        })
    }

    return (
        <div className="row content margin-t-6">
            <h1 className="col-12 title title-margin">Sign In</h1>
            <div className="col-12">
                <label className="body-1"> Username </label>
                <input type="text" className="input-text gutter-bottom" id="userName" placeholder="First name" value="johnsmith" required />
                <div className="valid-feedback">
                    Looks good!
                </div>
                <button type="button" className="btn btn-primary btn-login gutter-bottom" onClick={() => history.push('/password')}>Next</button>
            </div>
            <div className="col-12">
               <NewTo />
            </div>
        </div>
    )
}
export default SignIn;
