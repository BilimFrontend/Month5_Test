import React from 'react';
import classes from "./InputComponent.module.css";

const InputComponent = ({placeholder, name, type, onChange}) => {
    return (
        <input className={classes.input} type={type} name={name} placeholder={placeholder} onChange={onChange}/>
    );
};

export default InputComponent;