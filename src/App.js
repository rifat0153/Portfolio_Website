
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { CssBaseline } from '@material-ui/core'
import About from './Components/About'
import Landing from './Containers/Landing'


export default function App() {
    return (
        <Router>
            <div>
                <CssBaseline />
                <Switch>
                    <Route path="/" exact component={Landing} />
                    <Route path="/about" exact component={About} />
                </Switch>
            </div>
        </Router>

    )
}
