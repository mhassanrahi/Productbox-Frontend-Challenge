import React from 'react'
import './Item.css'

const Item = ({item}) => {
    return (
        <div className="col-12 col-md-6 col-lg-4 my-2">
            <div className="card h-100">
                <div class="wrapper">
                <img src={img} className="card-img-top" alt="..."/>
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
                    <a href="#" className="btn btn-primary">Add to cart</a>
                </div>
            </div>
        </div>
    )
}

export default Item
