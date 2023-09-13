import { useState, useRef } from "react";
import logo from "../../../assets/img/logo.png"
import SessionService from "../../../services/Sessions";

export const Register = ({ isRotated, rotateBox }) => {

    const formRef = useRef(null);

    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        address: '',
        age: '',
        phone: '',
        dni: '',
        password: '',
    });

    const [ error, setError ] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.first_name.trim() || !formData.last_name.trim() || !formData.email.trim() || !formData.address.trim() ||!formData.age.trim() || !formData.phone.trim() ||!formData.dni.trim() || !formData.password.trim()) {
            setError('Por favor, completa todos los campos');
            return;
        }
        try {
            const service = new SessionService();
            service.registerUser(formData, callbackSuccess, callbackError);
        } catch (error) {
            console.error('Error al registrar usuario:', error);
        }
    };

    const callbackSuccess = (res) => {
        console.log(res);
        setFormData({
            first_name: '',
            last_name: '',
            email: '',
            address: '',
            age: '',
            phone: '',
            dni: '',
            password: '',
        });
        setError('');
        formRef.current.reset();
        rotateBox();
    }  

    const callbackError = (err) => {
        console.log(err.response.data.error);
        setError(err.response.data.error);
    }

    return (
        <div className={ `register-box ${isRotated && 'isRotated'}` }>
            <div className="login-logo">
                <img 
                    src={ logo } 
                    className="logo" 
                    alt="logo" 
                />
            </div>
            <h2>Registrate</h2>
            <form 
                ref={formRef}
                className="register-form" 
                onSubmit={handleSubmit}
            >
                <div className="inputs">
                    <div className="user-box">
                        <input 
                            type="text" 
                            name="first_name" 
                            required 
                            value={formData.first_name}
                            onChange={handleChange}
                        />
                        <span />
                        <label>Nombre</label>
                    </div>

                    <div className="user-box">
                        <input 
                            type="text" 
                            name="last_name" 
                            required
                            value={formData.last_name}
                            onChange={handleChange} 
                        />
                        <span />
                        <label>Apellido</label>
                    </div>

                    <div className="user-box">
                        <input 
                            type="email" 
                            name="email" 
                            required 
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <span />
                        <label>Email</label>
                    </div>

                    <div className="user-box">
                        <input 
                            type="number" 
                            name="age"
                            required
                            value={formData.age}
                            onChange={handleChange}
                        />
                        <span />
                        <label>Edad</label>
                    </div>

                    <div className="user-box">
                        <input 
                            type="number"
                            name="phone" 
                            required
                            value={formData.phone}
                            onChange={handleChange}
                        />
                        <span />
                        <label>Teléfono</label>
                    </div>

                    <div className="user-box">
                        <input 
                            type="text" 
                            name="address" 
                            required
                            value={formData.address}
                            onChange={handleChange}
                        />
                        <span />
                        <label>Dirección</label>
                    </div>

                    <div className="user-box">
                        <input 
                            type="number" 
                            name="dni" 
                            required
                            value={formData.dni}
                            onChange={handleChange}
                        />
                        <span />
                        <label>DNI</label>
                    </div>

                    <div className="user-box">
                        <input 
                            type="password" 
                            name="password" 
                            required 
                            value={formData.password}
                            onChange={handleChange}
                        />
                        <span />
                        <label>Contraseña</label>
                    </div>
                </div>

                <div className="error-container">
                    <p className={ `error ${error && 'active'}` }>{ error }</p>
                </div>

                <div className="submit-container">
                        <input 
                            type="submit" 
                            value="Registrate" 
                            className="submit" 
                        />
                        <div className="register">
                            <p>Ya eres usuario?</p>
                            <p className='btn-login' onClick={ rotateBox }>Iniciar sesión</p>
                        </div>
                    </div>
            </form>
        </div>
    )
}
