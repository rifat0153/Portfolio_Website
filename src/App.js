import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import About from './Components/About'
import Main from './Components/Main'


export default function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/" exact component={Main} />
                    <Route path="/about" exact component={About} />
                </Switch>
            </div>
        </Router>

    )
}
