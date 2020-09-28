import React, {useState} from 'react'
import { connect } from 'react-redux'
import { clearItemFromCart } from '../redux/actions/cartActions'
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
                        cartItems?.map(cartItem => {
                            return (
                                <tr key={cartItem.id}>
                                    <td>{cartItem.name}</td>
                                    <td>{cartItem.price}</td>
                                    <td><img src={cartItem.img} className="img"/></td>
                                    <td>{cartItem.quantity}</td>
                                    <td className="close" onClick={() => clearItem(cartItem)}>X</td>
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
    cartItems: state.cart.cartItems
})
const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item))
})
export default connect(mapStateToProps, mapDispatchToProps)(CheckOut)
