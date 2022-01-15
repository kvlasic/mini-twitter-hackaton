import React from 'react'
import logo from "../bird.png"

export const Home = () => {
    return (
            <nav className="navbar-brand">
              <img src={logo} width="40" height="40" className="d-inline-block align-top" alt=""/>
            </nav>
    )
}

export default Home;