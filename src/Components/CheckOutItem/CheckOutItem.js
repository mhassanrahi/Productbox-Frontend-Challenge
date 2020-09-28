import React from 'react'
import { connect } from 'react-redux'
import { clearItemFromCart } from '../../redux/actions/cartActions'

const CheckOutItem = ({cartItem, clearItem}) => {
    return (
        <tr>
                                    <td>{cartItem.name}</td>
                                    <td>{cartItem.price}</td>
                                    <td><img src={cartItem.img} className="img" alt={cartItem.name}/></td>
                                    <td>{cartItem.quantity}</td>
                                    <td className="close" onClick={() => clearItem(cartItem)}> X</td>
        </tr>
    )
}

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item))
})
export default connect(null, mapDispatchToProps) (CheckOutItem)
