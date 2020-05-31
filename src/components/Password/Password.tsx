import React, { Dispatch, SetStateAction } from 'react'
import './Password.style.scss';
import NewTo from '../NewTo';
import { useHistory } from 'react-router-dom';

type Props = {
    setCreate: Dispatch<SetStateAction<boolean>>;
};

const Password: React.FC<Props> = ({ setCreate }) => {
    const history = useHistory();

    return (
        <div className="row content margin-t-6">
            <div className="col-12 row password-title-margin">
                <h1 className="col-5 title"> <a href="" onClick={() => history.push('/')}>{"<"}</a> </h1>
                <h1 className="col-7 title">Welcome</h1>
            </div>
            <p className="col-12 body-1 color-grey text-center">joshsmith</p>
            <div className="col-12 password-input-margin">
                <label className="body-1"> Password </label>
                <input type="password" className="input-text gutter-bottom" id="validationCustom01" placeholder="First name" value="johnsmith" required />
                <div className="valid-feedback">
                    Looks good!
                </div>
                <button type="button" className="btn btn-primary btn-login gutter-bottom">Sign In</button>
            </div>
            <div className="col-12">
                <NewTo />
            </div>
        </div>
    )
}
export default Password;
