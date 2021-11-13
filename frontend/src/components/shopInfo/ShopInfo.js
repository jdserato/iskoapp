import React, { Component } from 'react'
import ShoppingBag from '../../images/shopping-bag.png'
import './ShopInfo.css'

class ShopInfo extends Component {
    render() {
        return (
            <div className="shop-info">
                <small>500 coins</small><a href="#!"><img src={ShoppingBag} /></a>
            </div>
        )
    }
}

export default ShopInfo
