import React from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'



const Header = ({itemCount}) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">RandoStore</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link className="nav-link" to="/items">Browse Items</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/add">Add Item</Link>
                    </li>
                </ul>

                <div className="ml-auto">
                    <Link className="nav-link text-white" to="/checkout">Cart({itemCount.length})</Link>
                </div>
                </div>
            </div>
        </nav>
    )
}

const mapStateToProps = state => ({
    itemCount: state.cart.cartItems
})

export default connect(mapStateToProps)(Header)
