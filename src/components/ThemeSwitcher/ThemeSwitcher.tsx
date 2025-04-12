import React from "react";

import { useTheme } from "../ThemeContext";
import './ThemeSwitcher.css';


export const ThemeSwitcher: React.FC = ()=>{
     const {theme,toggleTheme} = useTheme();

     return(
         <label className="switch">
             <input type="checkbox" checked={theme === "dark"} onChange={toggleTheme} />
             <span className="slider"></span>
         </label>
     )
}