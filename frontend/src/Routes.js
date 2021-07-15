import React from 'react'
import { Route } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute'
import CartScreen from './screens/CartScreen'
import HomeScreen from './screens/HomeScreen'
import OrderScreen from './screens/OrderScreen'
import PaymentMethodScreen from './screens/PaymentMethodScreen'
import PlaceOrderScreen from './screens/PlaceOrderScreen'
import ProductScreen from './screens/ProductScreen'
import RegisterScreen from './screens/RegisterScreen'
import ShippingAddressScreen from './screens/ShippingAddressScreen'
import SigninScreen from './screens/SigninScreen'

export default function Routes() {
    return (
        <div>
            <Route path="/cart/:id?" component={CartScreen} />
            <Route path="/product/:id" component={ProductScreen} />
            <Route path="/register" component={RegisterScreen} />
            <Route path="/signin" component={SigninScreen} />
            <PrivateRoute path="/shipping" component={ShippingAddressScreen} />
            <Route path="/payment" component={PaymentMethodScreen} />
            <Route path="/placeorder" component={PlaceOrderScreen} />
            <PrivateRoute path="/order/:id" component={OrderScreen} />
            <Route path="/" component={HomeScreen} exact />
            <Route component={HomeScreen} />
        </div>
    )
}
