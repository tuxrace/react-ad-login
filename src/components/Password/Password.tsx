import React, { Dispatch, SetStateAction } from 'react'
import './Password.style.scss';
import NewTo from '../NewTo';
import { useHistory } from 'react-router-dom';
import InputText from '../InputText';

const Password = () => {
    const history = useHistory();

    return (
        <div className="row">
            <div className="col-12 row password-title-margin">
                <h1 className="col-5 title"> <a href="#" onClick={() => history.push('/')}>{"<"}</a> </h1>
                <h1 className="col-7 title">Welcome</h1>
            </div>
            <p className="col-12 body-2 color-grey text-center">johnsmith</p>
            <div className="col-12 password-input-margin">
                <InputText type="password" id="enterPassword" label="Password" />
                <button type="button" className="btn btn-primary btn-login gutter-top gutter-bottom">Sign In</button>
            </div>
            <div className="col-12 gutter-top">
                <NewTo />
            </div>
        </div>
    )
}
export default Password;
