import { useState } from "react";
import { Login } from "../../components/Login/Login";
import { Register } from "../../components/Register/Register";
import './SessionPage.css';

export const SessionPage = () => {

    const [ isRotated, setIsRotated ] = useState(false);

    const rotateBox = () => {
      setIsRotated(!isRotated);
    }

    return (
        <div className="session-container">
            <div className="box-container">
                <Login rotateBox = { rotateBox } isRotated = { isRotated } />
                <Register rotateBox = { rotateBox } isRotated = { isRotated } />
            </div>
        </div>
    )
}
