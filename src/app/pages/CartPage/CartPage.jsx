import { Cart } from '../../components/Cart/Cart';
import { Clock } from '../../components/Clock/Clock';
import { Buyer } from '../../components/Buyer/Buyer';
import { Payment } from '../../components/Payment/Payment';
import './CartPage.css';

export const CartPage = () => {

    return (
        <div className='cart-container'>
            <h1 className='title-services'>Carrito</h1>
            <div className="line-container">
				<p className="line"></p>				
			</div>
            <Cart />
            <Clock />
            <Buyer />
            <Payment />
        </div>
    )
}
