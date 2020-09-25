import React from 'react'

import {BrowserRouter as Router, Switch , Route} from 'react-router-dom'

import Header from './Components/Header'
import AddItem from './Components/AddItem'
import ItemsList from './Components/ItemsList'
import CheckOut from './Components/CheckOut'

const App = () => {
    return (
        <Router>
            <div>
                <Header />
            
            <div className="container">
                <Switch>
                    <Route exact path='/add' component={AddItem} />
                    <Route exact path='/items' component={ItemsList} />
                    <Route exact path='/checkout' component={CheckOut} />
                </Switch>
            </div>
                
            </div>

        </Router>
    )
}

export default App
