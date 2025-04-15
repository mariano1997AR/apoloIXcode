import React from "react"

import {NavbarPage} from "../Navbar/NavbarPage";
import { Outlet } from "react-router-dom"
import { FooterPage } from "../FooterPage/FooterPage"


export const Layout: React.FC = ()=>{
     return (
        <> 
            <NavbarPage />
            <main>
                <Outlet />
            </main>
            <FooterPage /> 
          
        </>
     )
}