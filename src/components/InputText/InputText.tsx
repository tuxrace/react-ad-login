import React, { Fragment } from 'react';

type Props = {
    id: string;
    message: string;
    label: string;
    [otherProps:string]: any;
}
const InputText: React.FC<Props>  = ({ name, label, message, ...otherProps}) => {
    return (
        <Fragment>
            <label className="body-1"> {label} </label>
            <input className="input-text" placeholder={label} {...otherProps}  />
            <div className="invalid-feedback error-message">{message}</div>
        </Fragment>
    )
}

export default InputText