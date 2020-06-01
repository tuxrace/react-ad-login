import React from 'react';
import { useHistory } from 'react-router-dom';

type Props = {
    existing?: boolean
}

const NewTo: React.FC<Props> = ({existing}) => {
    const history = useHistory();

    return (
        <div className="row">
            <div className="col-12">
                {existing ? <p className="text-center body-2 color-grey">Already have an account? <a href="#" onClick={(e) =>{  e.preventDefault(); history.push('/') }} className="body-2">Sign In</a></p>
                : <p className="text-center body-2 color-grey">New to Autodesk? <a href="#" onClick={(e) =>{  e.preventDefault(); history.push('/create') }} className="body-2">Create Account</a></p> }
            </div>
        </div>
    )
}

export default NewTo;
