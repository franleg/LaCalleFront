import "./Navbar.css";
import { NavLink, useNavigate } from 'react-router-dom';
import logo from "../../../assets/img/logo.png"
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { useDispatch } from "react-redux";
import { logout } from "../../../store/slices/token";

export const Navbar = () => {
    const navigate = useNavigate();

    const [ isActive, setIsActive ] = useState(false);

    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
        setIsActive(false);
        navigate("/session");
    }

    return (
        <nav className= { `navbar ${isActive && 'active'} sticky-top` } >
            <NavLink to="/" className="nav_logo">
                <img src={logo} alt="logo" /> 
            </NavLink>
            <ul className={ `nav_items ${isActive && 'active'}` }>
                <li>
                    <NavLink to="/" onClick={ () => setIsActive(!isActive) }>
                        Inicio
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/servicios" onClick={ () => setIsActive(!isActive) }>
                        Servicios
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/contacto" onClick={ () => setIsActive(!isActive) }>
                        Contacto
                    </NavLink>
                </li>
{/*                 <li>
                    <NavLink to="/carro" onClick={ () => setIsActive(!isActive) }>
                        <FontAwesomeIcon icon={faCartShopping} style={{ color: "#ffffff" }} />
                    </NavLink>
                </li> */}
                <li>
                    <NavLink 
                        to="/perfil" 
                        onClick= { () => { handleLogout() } }>
                        <FontAwesomeIcon icon={faUser} style={{ color: "#ffffff" }} />
                    </NavLink>
                </li>
            </ul>
            <div className= "nav_menu" onClick={ () => setIsActive(!isActive) }>
                <span className={ `line1_menubars ${isActive && 'active'}` } />
                <span className={ `line2_menubars ${isActive && 'active'}` } />
                <span className={ `line3_menubars ${isActive && 'active'}` } />
            </div>
        </nav>
    )
}
