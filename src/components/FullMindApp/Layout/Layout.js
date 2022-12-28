import React from 'react'
import Head from "next/head"
import GoTop from '../Common/GoTop'
import Sidebar from '../Sidebar/Sidebar'
import { Toaster } from "react-hot-toast";

const Layout = ({ children }) => {
    return(
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>FullMind - E-learning corporativo on demand.</title>
            </Head>
            
            {children}

            <Toaster 
                position="top-right" 
            />

            <GoTop 
                scrollStepInPx="100" 
                delayInMs="10.50" 
            />

            <Sidebar />
        </>
    )
}

export default Layout