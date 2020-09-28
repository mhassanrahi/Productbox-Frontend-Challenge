import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Item from '../Item/Item'

const ItemsList = () => {
    const [items, setItems] = useState([])

    useEffect(()=>{
        getItems()
    }, [])

    const getItems = async () => {
        const {data} = await axios.get('http://localhost:4000/items')
        setItems(data)
    }
    return (
        <div className="row">
            {items?.map(item => {
                return <Item key={item.id} item={item}/>
            })}
        </div>
    )
}

export default ItemsList
