export const Payment = () => {
    return (
        <div className='payment-container'>
            <h2>Selecciona tu forma de pago</h2>
            <form className="payment-select">
                <label>
                    <input type="radio"/>
                    <span>Efectivo</span>
                </label>
                <label>
                    <input type="radio"/>
                    <span>Mercado Pago</span>
                </label>
                <label>
                    <input type="radio"/>
                    <span>Tarjeta de Débito/Crédito</span>
                </label>
            </form>
            <div className='total-container'>
                <h3>Total</h3>
                <p>$17.000</p>
            </div>
            <div className='purchaseButton-container'>
                <p>Por favor verificá tus datos antes de realizar la compra.</p>
                <button className="btn-buy">Comprar</button>
            </div>
        </div>
    )
}
