import React from 'react'
import { Route } from 'react-router-dom'
import CartScreen from './screens/CartScreen'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import SigninScreen from './screens/SigninScreen'

export default function Routes() {
    return (
        <div>
            <Route path="/cart/:id?" component={CartScreen} />
            <Route path="/product/:id" component={ProductScreen} />
            <Route path="/signin" component={SigninScreen} />
            <Route path="/" component={HomeScreen} exact />
        </div>
    )
}
