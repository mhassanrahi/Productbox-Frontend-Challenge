import React from 'react'
import { connect } from 'react-redux'
import CheckOutItem from '../CheckOutItem/CheckOutItem'

import './CheckOut.css'

const CheckOut = ({cartItems, clearItem}) => {
    return (
        <div className="my-4">
            <h5 className="text-center my-4">Items in the Cart</h5>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Item</th>
                        <th scope="col">Price</th>
                        <th scope="col">Image</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cartItems.map(cartItem => {
                            return (
                                <CheckOutItem cartItem={cartItem} key={cartItem.id} />
                            )
                        })
                    }
                    
                </tbody>
            </table>

        </div>
    )
}

export const mapStateToProps = state => ({
    cartItems: state.cart.cartItems
})

export default connect(mapStateToProps)(CheckOut)
