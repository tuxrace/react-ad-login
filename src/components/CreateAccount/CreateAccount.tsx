import React from 'react';

const CreateAccount = () => {
    
    const validateUser = () => {

    }

    return (
        <div className="row margin-t-6">
            {/* <form id="form1 col-12"> */}
                <h1 className="col-12 title title-margin">CreateAccount</h1>
                <div className="col-12 row">
                    <div className="col-6">
                        <label className="body-1"> First name </label>
                        <input type="text" className="input-text" id="inputUsername" placeholder="Username" required />
                        <div className="invalid-feedback error-message">
                            The username is not recognized
                        </div>
                    </div>
                    <div className="col-6">
                        <label className="body-1"> Last name </label>
                        <input type="text" className="input-text" id="inputUsername" placeholder="Username" required />
                        <div className="invalid-feedback error-message">
                            The username is not recognized
                        </div>
                    </div>
                </div>
                <div className="col-12 gutter-top">
                    <label className="body-1"> Username </label>
                    <input type="text" className="input-text" id="inputUsername" placeholder="Username" required />
                    <div className="invalid-feedback error-message">
                        The username is not recognized
                    </div>
                </div>
                <div className="col-12 gutter-top">
                    <label className="body-1"> Re-type Username </label>
                    <input type="text" className="input-text" id="inputUsername" placeholder="Username" required />
                    <div className="invalid-feedback error-message">
                        The username is not recognized
                    </div>
                </div>
                <div className="col-12 gutter-top">
                    <label className="body-1"> Password </label>
                    <input type="text" className="input-text" id="inputUsername" placeholder="Username" required />
                    <div className="invalid-feedback error-message">
                        The username is not recognized
                    </div>
                </div>
                <div className="col-12 gutter-top">
                    <label className="body-1"> Username </label>
                    <input type="text" className="input-text" id="inputUsername" placeholder="Username" required />
                    <div className="invalid-feedback error-message">
                        The username is not recognized
                    </div>
                </div>
                <div className="col-12 gutter-top">
                    <label className="body-1"> Re-type password </label>
                    <input type="text" className="input-text" id="inputUsername" placeholder="Username" required />
                    <div className="invalid-feedback error-message">
                        The username is not recognized
                    </div>
                </div>
                <div className="col-12 gutter-top">
                    <button type="button" className="btn btn-primary btn-login gutter-top gutter-bottom" onClick={validateUser}>Create Account</button>
                </div>
            {/* </form> */}
        </div>
    )
}

export default CreateAccount;
