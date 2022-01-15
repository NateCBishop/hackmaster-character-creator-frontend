import React from 'react'
import logo from '../assets/hackmaster_logo.gif'

function header() {
    return (
        <div className='row'>
            <div id='logo-container' className='xs-12 col-4'>
                <img src={logo} alt="Hackmaster logo" />
            </div>
            <div id='text-container' className='xs-12 col 8'>
                <h1 className='align-middle'>Bunch of Jerkoffs</h1>
            </div>
            
        </div>
    )
}

export default header
