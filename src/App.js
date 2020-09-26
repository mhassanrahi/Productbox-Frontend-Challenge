import React from 'react'

import {BrowserRouter as Router, Switch , Route} from 'react-router-dom'

import Header from './Components/Header'
import AddItem from './Components/AddItem'
import ItemsList from './Components/ItemsList'
import CheckOut from './Components/CheckOut'

import { Provider } from 'react-redux'
import store from './redux/store'

const App = () => {
    return (
        <Provider store={store}>
            <Router>
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

            </Router>
        </Provider>
    )
}

export default App
