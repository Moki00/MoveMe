import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import { NavBar } from '../components'
import './app.css';

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    return (
        <div className='app'>

        <Router>
            <NavBar/>
        </Router>
        </div>
    )
}

export default App