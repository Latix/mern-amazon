import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import PageNotFound from './components/PageNotFound'
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
            <Route exact path="/" component={HomeScreen} />
            <Route exact path="/cart/:id?" component={CartScreen} />
            <Route exact path="/product/:id" component={ProductScreen} />
            <Route exact path="/register" component={RegisterScreen} />
            <Route exact path="/signin" component={SigninScreen} />
            <PrivateRoute exact path="/shipping" component={ShippingAddressScreen} />
            <Route exact path="/payment" component={PaymentMethodScreen} />
            <Route exact path="/placeorder" component={PlaceOrderScreen} />
            <PrivateRoute exact path="/order/:id" component={OrderScreen} />
            {/* <Route component={PageNotFound} /> */}
            <Redirect to="/"/>
        </div>
    )
}
