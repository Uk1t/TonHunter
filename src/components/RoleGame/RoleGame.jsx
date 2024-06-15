import React from 'react'
import { button } from 'telegraf/markup'
import "./RoleGame.css"

export default function RoleGame() {
    return (<>
        <div className="rolegame-wraper">
            <button className='rolegame__item rg1'></button>
            <button className='rolegame__item rg2'></button>
        </div>

    </>

    )
}
