import React,{useContext} from "react";
import { ThemeContext } from "../ThemeContext";
import './ThemeSwitcher.css';


export const ThemeSwitcher: React.FC = ()=>{
     const themeContext = useContext(ThemeContext);

     if(!themeContext) return null;

     const {theme,toggleTheme} = themeContext;

     return(
         <label className="switch">
             <input type="checkbox" checked={theme === "dark"} onChange={toggleTheme} />
             <span className="slider"></span>
         </label>
     )
}