



// Button.tsx 
import React from "react"; 
import "./button.css"; 

interface ButtonProps { 
    children: React.ReactNode; 
    onClick?: () => void; type?: "button" | "submit" | "reset"; 
    className?: string; // allows custom classes if needed 
    } 
    
const Button: React.FC<ButtonProps> = ({ 
    children, 
    onClick, type = "button", 
    className = "", 
}) => { 
    return ( 
    <button type={type} onClick={onClick} className={`txtybtn ${className}`}> 
    {children} 
    </button> ); 
    }; 
    export default Button;