import React from 'react';
import classes from "./MainPage.module.css";
import PostUserPage from "../postUserPage/PostUserPage";

const MainPage = () => {
    return (
        <div className={classes.container}>
            <PostUserPage/>
        </div>
    );
};

export default MainPage;