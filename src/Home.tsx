

import React, { FC } from 'react';
import { Outlet } from 'react-router';
import { MainMenu } from './__generate/MainMenu';


export const Home = () => {

    return (
        <>
            {/* <MainMenu /> */}
            <Outlet />
        </>
    )
}