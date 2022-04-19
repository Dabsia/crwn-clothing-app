import React from 'react';

import './custom-button.styles.scss'

const CustomButton = ({children, isGoogleSignIn, inverted, ...otherProps}) => {
    return(
        // Create a condition to check if the button has a isGoogleSignIn prop then add a class to it
        <button className= {`${ isGoogleSignIn ? 'google-sign-in': ''} ${inverted ? 'inverted': ''} custom-button`}
         {...otherProps} >
            {children}
        </button>
    )
    


}

export default CustomButton


