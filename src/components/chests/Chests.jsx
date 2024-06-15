import './Chests.css'
import React, { } from 'react';


const chestItem = [
    {
        id: 1,
        image: "tc 1.png",
        number: 12,
    },
    {
        id: 2,
        image: "tc 2.png",
        number: 10,
    },
    {
        id: 3,
        image: "tc 3.png",
        number: 5,
    },
    {
        id: 4,
        image: "tc 4.png",
        number: 5,
    }
]



export function Chests() {
    return (
        <>
            <div className='chests-main'>

                {
                    chestItem.map((chest) => {
                        return (
                            <div key={chest.id} className='chest__item' >
                                <img className='chest__image' src={"./Chests/" + chest.image} alt="" />
                                <p className='chest__x'>x</p>
                                <p className='chest__number'>{chest.number}</p></div>
                        )
                    })
                }

            </div>



        </>)
}

