import React from 'react';


type buttonType = {
    callBack: () => void
    title:string
}

const Button = (props: buttonType) => {

    return (

            <button onClick={props.callBack}>{props.title}</button>

    );
};

export default Button;