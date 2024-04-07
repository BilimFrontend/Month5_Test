import React, {useState} from 'react';
import InputComponent from "../../components/inputComponent/InputComponent";
import Button from "../../components/buttonComponent/Button";
import {postData} from "../../redux/PostSlice";
import {useDispatch} from "react-redux";

const PostUserPage = () => {

    const dispatch = useDispatch()

    const [errorMessage, setErrorMessage] = useState('')
    const [user, setUser] = useState({
        email: '',
        password: '',
        rePassword: ''
    })

    console.log(user)
    const registerValue = (event) => {
        setUser({...user, [event.target.name]: event.target.value})
        setErrorMessage('')
    }

    const addUser = (event) => {
        event.preventDefault()
        const registerUser = JSON.parse(localStorage.getItem('userRegister'))
        if (!user.email|| !user.password || !user.rePassword){
            setErrorMessage("Заполните все поля")
            return errorMessage
        }else if(user.password !== user.rePassword){
            setErrorMessage("Пароли не совподают")
            return errorMessage
        }else if (registerUser && registerUser.email === user.email || registerUser.password === user.password){
            setErrorMessage("Пользователь уже зарегистрирован")
            return errorMessage
        }else{
            dispatch(postData(user))
        }
    }

    return (
        <div>
            {errorMessage && <p>{errorMessage}</p>}
            <InputComponent placeholder={"Введите почту"}
                            type={"email"}
                            name={"email"}
                            onChange={registerValue}

            />
            <InputComponent placeholder={"Введите пароль"}
                            type={"password"}
                            name={"password"}
                            onChange={registerValue}
            />
            <InputComponent placeholder={"Повторите пароль"}
                            type={'password'}
                            name={"rePassword"}
                            onChange={registerValue}
            />
            <Button onClick={addUser} text={"Регистрация"}/>
        </div>
    );
};

export default PostUserPage;