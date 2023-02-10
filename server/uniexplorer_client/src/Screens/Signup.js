import React from 'react'
import Avatar from '../Components/Avator'

const SignupScreen=()=>{
    return(
        <>
        <h1 className="text-center welcometxt mt-4" >Signup </h1>
        <div className="row">
       <Avatar
       signup={true}
       />
       </div>
        </>
    )
}

export default SignupScreen;