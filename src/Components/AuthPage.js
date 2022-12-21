import React from 'react'
import { auth } from '../firebaseConfig';

function AuthPage({type}) {
    return (
        <div>
            this is AuthPage for {type} !!!
        </div>
    )
}

export default AuthPage
