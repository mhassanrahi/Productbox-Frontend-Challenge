import React, {useState} from 'react'
import { connect } from 'react-redux'
import { addItem } from '../redux/actions/cartActions'
import './Item.css'


const Item = ({item, addItem}) => {
    const {name, img, price} = item
    const [cartItems, setCartItems] = useState([])

    const addToCart = () => {
        console.log('Added to cart!')
    }

    return (
        <div className="col-12 col-md-6 col-lg-4 my-2">
            <div className="card h-100">
                <div className="wrapper">
                <img src={img} className="card-img-top" alt={name}/>
                </div>
                <div className="card-body bg-dark">
                    <div className="row">
                        <div className="col-6">
                            <h5 className="card-title text-white">{name}</h5>
                        </div>
                        <div className="col-6 text-right">
                        <h5 className="card-title text-white">PKR. {price}</h5>
                        </div>
                    </div>
                    <a onClick={()=> addItem(item)} className="btn btn-primary">Add to cart</a>
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})
export default connect(null, mapDispatchToProps)(Item)
