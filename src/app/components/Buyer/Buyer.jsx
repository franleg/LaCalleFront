import React from 'react'

export const Buyer = () => {
    return (
        <div className="buyer-container">
            <h2>Datos del Comprador</h2>
            <form className="form">
                <div>
                    <label>NOMBRE Y APELLIDO</label>
                    <input type="text" name="" id="" placeholder="Ingresa tu nombre y apellido"/>                        
                </div>
                <div>
                    <label>EMAIL</label>
                    <input type="email" name="" id="" placeholder="Ingresa tu email"/>                        
                </div>
                <div>
                    <label>REPETIR EMAIL</label>
                    <input type="email" name="" id="" placeholder="Repeti el email ingresado"/>                        
                </div>
                <div>
                    <label>TELÉFONO</label>
                    <input type="number" name="" id="" placeholder="Ingresa tu teléfono"/>                        
                </div>
                <div>
                    <label>DNI</label>
                    <input type="number" name="" id="" placeholder="Ingresa tu DNI"/>                        
                </div>
            </form>
        </div>
    )
}
