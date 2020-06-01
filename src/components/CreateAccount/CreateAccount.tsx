import React from 'react';
import InputText from '../InputText';
import NewTo from '../NewTo';

const CreateAccount = () => {
    
    const validateUser = () => {
        const form = document.querySelector(".form") as HTMLFormElement;
        form.classList.add('was-validated');
    }

    return (
        <div className="row margin-t-6">
            <form className="form">
                <h1 className="col-12 title title-margin">CreateAccount</h1>
                <div className="col-12 row">
                    <div className="col-6">
                        <InputText name="firstName" label="First name" message="Please enter your first name" />
                    </div>
                    <div className="col-6">
                        <InputText name="firstName" label="Last name" message="Please enter your first name" />
                    </div>
                </div>
                <div className="col-12 gutter-top">
                    <InputText name="firstName" label="Username" message="Please enter your first name" />
                </div>
                <div className="col-12 gutter-top">
                    <InputText name="firstName" label="Re-type username" message="Please enter your first name" />
                </div>
                <div className="col-12 gutter-top">
                    <InputText name="firstName" label="Password" message="Please enter your first name" />
                </div>
                <div className="col-12 gutter-top">
                    <InputText name="firstName" label="Re-type password" message="Please enter your first name" />
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
