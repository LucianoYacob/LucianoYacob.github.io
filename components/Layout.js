import React, { useState, useEffect } from 'react';
import Head from "next/head";
import HeaderResponsive from "./HeaderResponsive";


const Layout = ({children, theme, setTheme}) => {

    return(
    <>
        <Head>
            {/* Fredoka (H1 - H2) */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
            <link href={`https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap`} rel="stylesheet" />
    
            {/* Dosis (p - span - b - i) */}
            <link href={`https://fonts.googleapis.com/css2?family=Dosis:wght@300;400&display=swap`} rel="stylesheet" />

            <link rel="shortcut icon" href="/favicon.png" />
            <title>Luciano Yacob</title>
        </Head>

        <HeaderResponsive theme={theme} setTheme={setTheme}/>

        <main>
            {children}
        </main>
    </>
)};

export default Layout;