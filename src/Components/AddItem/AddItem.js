import React, {useState} from 'react'
import axios from 'axios'

const AddItem = () => {

    const INITIAL_STATE = {
        itemName: '',
        itemPrice: '',
        imageURL: ''
    }
    
    const [itemData, setItemData] = useState(INITIAL_STATE)

    const {itemName, itemPrice, imageURL} = itemData;

    const handleChange = e => {
        const {name, value} = e.target;

        setItemData({
            ...itemData,
            [name]: value
        })
        
    }
    const handleSubmit = async e => {
        e.preventDefault();
        await axios.post('http://localhost:4000/items', itemData)
        setItemData(INITIAL_STATE)
    }


    return (
        <div className="card p-4 my-4 col-md-6 offset-md-3">
            <form onSubmit={handleSubmit}>
                <h3>Add Item</h3>
                <div className="form-group row my-2">
                    <label htmlFor="name" className="col-md-3 col-form-label" >Name:</label>
                    <div className="col-md-9">
                    <input type="text" className="form-control" name="itemName" value={itemName} onChange={handleChange} />
                    </div>
                </div>
                <div className="form-group row my-2">
                    <label htmlFor="price" className="col-md-3 col-form-label">Price:</label>
                    <div className="col-md-9">
                    <input type="text" className="form-control" name="itemPrice" value={itemPrice} onChange={handleChange} />
                    </div>
                </div>
                <div className="form-group row my-2">
                    <label htmlFor="imageUrl" className="col-md-3 col-form-label">Image URL:</label>
                    <div className="col-md-9">
                    <input type="text" className="form-control" name="imageURL" value={imageURL} onChange={handleChange} />
                    </div>
                </div>
                <div className="form-group row my-2">
                    <div className="col-3"></div>
                    <input name="submit" className="btn btn-primary w-25 offset-3" type="submit" value="Add" />
                </div>
                
            </form>
        </div>
    )
}

export default AddItem
