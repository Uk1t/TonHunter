import React, { } from 'react';
import "./Footer.css"

const footerItems = [
    {
        id: 'foot1',
        image: 'but 2',
        link: './'
    },
    {
        id: 'foot2',
        image: 'but 3',
        link: '#'
    },
    {
        id: 'foot3',
        image: 'but 1',
        link: '#'
    },
    {
        id: 'foot4',
        image: 'but 4',
        link: '#'
    },
    {
        id: 'foot5',
        image: 'but 5',
        link: '#'
    },

]

export function Footer() {
    return (
        <>
            <div className="footer">
                {footerItems.map((footerItems) => {
                    return (<a key={footerItems.id} href={footerItems.link}>
                        <img key={footerItems.id} className='footer__img' src={`./img/page1/obj/${footerItems.image}.png`} alt="" />
                    </a>)
                }

                )}</div>
        </>
    )
}