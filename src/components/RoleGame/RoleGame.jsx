import React from 'react'
import { button } from 'telegraf/markup'
import "./RoleGame.css"

export default function RoleGame() {
    return (<>
        <div className="rolegame-wraper">
            <input type='Radio' name='rg' className='rolegame__item rg1 '>

            </input>
            <input type='Radio' name='rg' className='rolegame__item rg2 '></input>

        </div>

    </>

    )
}