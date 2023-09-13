import { useState, useRef } from "react";
import logo from "../../../assets/img/logo.png"
import SessionService from "../../../services/Sessions";
import { useDispatch } from 'react-redux';
import { login } from "../../../store/slices/session";

export const Login = ({ isRotated, rotateBox }) => {

    const dispatch = useDispatch();

    const formRef = useRef(null);

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const [ error, setError ] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleLogin = (e) => {
        e.preventDefault();
        if (!formData.email.trim() || !formData.password.trim()) {
            setError('Por favor, completar todos los campos');
            return;
        }
        try {
            const sessionService = new SessionService();
            sessionService.loginUser(formData, callbackSuccess, callbackError);
        } catch (error) {
            console.error('Error al iniciar sesión:', error);
        }
    };

    const callbackSuccess = (res) => {
        const { token, expiresAt, loginUser } = res.data;
        setFormData({
            email: '',
            password: '',
        });
        setError('');
        formRef.current.reset();
        dispatch(login({ token, expiresAt, loginUser }));
    }     
      
    const callbackError = (err) => {
        console.log(err.response.data.error);
        setError(err.response.data.error);
    }

    return (
        <div className={ `login-box ${isRotated && 'isRotated'}` }>
            <div className="login-logo">
                <img 
                    src={ logo } 
                    className="logo" 
                    alt="logo" 
                />
            </div>
            <h2>Iniciar sesión</h2>
            <form 
                ref={formRef}
                className="login-form" 
                onSubmit={handleLogin} 
            >
                <div className="user-box">
                    <input 
                        type="email" 
                        name="email" 
                        required
                        onChange={handleChange}
                    />
                    <label htmlFor="email">Email</label>
                    <span />
                </div>

                <div className="user-box">
                    <input 
                        type="password" 
                        name="password"  
                        required
                        onChange={handleChange}
                    />
                    <label htmlFor="password" >Contraseña</label>
                    <span />
                </div>

                <div className="error-container">
                    <p className={ `error ${error && 'active'}` }>{ error }</p>
                </div>

                <div className="submit-container">
                    <input type="submit" value="Iniciar sesión" className="submit" />
                    <div className="register">
                        <p>No eres usuario?</p>
                        <p className='btn-register' onClick={ rotateBox }>Registrate</p>
                    </div>
                </div>
            </form>
        </div>
    )
}
