import React, {useState} from 'react'
import { connect } from 'react-redux'

import './CheckOut.css'

const CheckOut = ({cartItems}) => {
    return (
        <div className="my-4">
            <h5 className="text-center my-4">Items in the Cart</h5>
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Item</th>
                    <th scope="col">Price</th>
                    <th scope="col">Image</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cartItems?.cartItems.map(cartItem => {
                            return (
                                <tr key={cartItem.id}>
                                    <td scope="row">{cartItem.id}</td>
                                    <td>{cartItem.name}</td>
                                    <td>{cartItem.price}</td>
                                    <td><img src={cartItem.img} className="img"/></td>
                                    <td className="close">X</td>
                                </tr>
                            )
                        })
                    }
                    
                </tbody>
            </table>

        </div>
    )
}

export const mapStateToProps = state => ({
    cartItems: state.cart
})
export default connect(mapStateToProps)(CheckOut)
