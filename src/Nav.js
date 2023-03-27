import React from 'react'
import { Link } from 'react-router-dom'
import './App.css'


function Nav() {

    return <div>
        <div className="grid " style={{ backgroundColor: 'crimson' }}>
            <nav>
                <Link to="/">
                    <button className="btn btn-primary buttons">Home</button>
                </Link>
                <Link to="/about">
                    <button className="btn btn-primary buttons">About</button>
                </Link>
                <Link to="/contact">
                    <button className="btn btn-primary buttons">Contact</button>
                </Link>
            </nav>

        </div>
    </div>


}
export default Nav