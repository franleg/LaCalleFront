export const Buyer = () => {
    return (
        <>
            <div className="buyer-container">
                <h2>Datos del Comprador</h2>
                <form className="form">
                    <div>
                        <label>NOMBRE</label>
                        <input type="text" name="name" placeholder="Ingresa tu nombre"/>                        
                    </div>
                    <div>
                        <label>APELLIDO</label>
                        <input type="text" name="lastName" placeholder="Ingresa tu apellido"/>                        
                    </div>
                    <div>
                        <label>EMAIL</label>
                        <input type="email" name="email" placeholder="Ingresa tu email"/>                        
                    </div>
                    <div>
                        <label>REPETIR EMAIL</label>
                        <input type="email" placeholder="Repeti el email ingresado" />                        
                    </div>
                    <div>
                        <label>TELÉFONO</label>
                        <input type="number" name="phone" placeholder="Ingresa tu teléfono"/>                        
                    </div>
                    <div>
                        <label>DIRECCIÓN</label>
                        <input type="text" name="adress" placeholder="Ingresa tu dirección" />                        
                    </div>
                    <div>
                        <label>DNI</label>
                        <input type="number" name="dni" placeholder="Ingresa tu dni"/>                        
                    </div>
                </form>
            </div>
        </>
    )
}
