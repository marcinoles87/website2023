import React from "react";
import './button.css'
import { Link } from "react-router-dom";

const STYLES = ['btn--primary' , 'btn--outline'];

const SIZES = ['btn--medium' , 'btn--large'];

 const  Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
}) => {

    const checkButtonStyle = STYLES.includes(buttonStyle)
     ? buttonStyle 
     : STYLES[0];

     const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

     return(
        <Link to='/sign-up' className="btn-mobile">
            <button className="button">
                {children} Sign In 
            </button>
        </Link>
     )
};

export default Button