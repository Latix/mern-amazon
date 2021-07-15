import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { savePaymentMethod } from '../actions/cartActions';
import CheckoutSteps from '../components/CheckoutSteps'

export default function PaymentMethodScreen(props) {
    const cart = useSelector((state) => state.cart);
    const { shippingAddress } = cart;
    
    const [paymentMethod, setPaymentMethod] = useState("Paypal");
    const dispatch = useDispatch();

    useEffect(() => {
        if (!shippingAddress) {
            props.history.push('/shipping');
        }
    }, [shippingAddress, props.history]);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(savePaymentMethod (paymentMethod));
        props.history.push('/placeorder');
    }
    return (
        <div>
            <CheckoutSteps step1 step2 step3 />
            <form className="form" onSubmit={submitHandler}>
                <div>
                    <h1>Payment Method</h1>
                </div>
                <div>
                    <div>
                        <input 
                            type="radio" 
                            id="paypal" 
                            value="Paypal" 
                            name="Payment Method" 
                            required 
                            checked
                            onChange={(e) => setPaymentMethod(e.target.value)}
                        />
                        <label htmlFor="paypal">Paypal</label>
                    </div>
                </div>
                <div>
                    <div>
                        <input 
                            type="radio" 
                            id="stripe" 
                            value="Stripe" 
                            name="Payment Method" 
                            required 
                            onChange={(e) => setPaymentMethod(e.target.value)}
                        />
                        <label htmlFor="stripe">Stripe</label>
                    </div>
                </div>
                <div>
                    <button className="primary" type="submit">Continue</button>
                </div>
            </form>
        </div>
    )
}
