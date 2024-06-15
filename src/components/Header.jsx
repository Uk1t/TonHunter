import './Header.css'
import React, { } from 'react';
import { Chests } from './chests/Chests'

export function Header() {
    return (
        <>

            <div className='wrapper'>
            <header className="header">
                <button className='btn header_leftBtn'></button>
                <p className='user__name'>UserName</p>
                <button className='btn header_rightBtn'></button>


            </header>
            <Chests />
            </div>
        </>
    )
}