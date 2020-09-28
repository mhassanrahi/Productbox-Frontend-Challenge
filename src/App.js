import React from 'react'

import {Switch , Route} from 'react-router-dom'

import Header from './Components/Header/Header'
import AddItem from './Components/AddItem/AddItem'
import ItemsList from './Components/ItemsList/ItemsList'
import CheckOut from './Components/CheckOut/CheckOut'


const App = () => {
    return (
            <div>
                {/* Header */}
                <Header />
                    {/* Content */}
                    <div className="container py-4">
                        <Switch>
                            <Route exact path='/add' component={AddItem} />
                            <Route exact path='/items' component={ItemsList} />
                            <Route exact path='/checkout' component={CheckOut} />
                        </Switch>
                    </div>
            </div>
    )
}

export default App
