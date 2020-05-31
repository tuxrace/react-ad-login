import React from 'react';
import { useHistory } from 'react-router-dom';

const NewTo = () => {
    const history = useHistory();
    
    return (
        <div className="row">
            <div className="col-12">
                <p className="text-center body-2 color-grey">New to Autodesk? <a href="#" onClick={() => history.push('/create')} className="body-2">Create Account</a></p>
            </div>
        </div>
    )
}

export default NewTo;
