import React, { useEffect } from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer/Footer'
import RoleGame from '../components/RoleGame/RoleGame'
import a1 from '../animations/a1.gif'
import a2 from '../animations/a2.gif'
import a3 from '../animations/a3.gif'

const items = [
    {
        id: 1,
        animation: a1,
        dropChance: 0.1
    },
    {
        id: 2,
        animation: a2,
        dropChance: 0.33
    },
    {
        id: 3,
        animation: a3,
        dropChance: 0.33
    }
]



export default function SecondPage() {
    useEffect(() => {
        function getByChance(items) {
            const totalChances = items.reduce((acc, c) => acc + c.dropChance, 0);
            const rnd = totalChances * Math.random();

            for (let i = 0, sum = 0; ; i++) {
                sum += items[i].dropChance;
                if (sum > rnd) return items[i];
            }
        }
        let anim = document.querySelector('.anim')
        let itemchanse = getByChance(items)
        console.log(itemchanse);
        anim.src = itemchanse.animation

    })



    useEffect(() => {
        let play = document.querySelector('.play')
        let anim = document.querySelector('.anim')
        let field = document.querySelector('.second__field')
        let count = 0
        play.onclick = function () {
            return count += 1, count > 5 ? anim.classList.toggle('animNOt') + field.classList.toggle('none_field') : false;
        }
    }



    )

    return (


        <>

            <div className="field second__field ">

                <div id='play' className="play "></div>
            </div>
            <img className='anim animNOt' src="" alt="234" />
            <RoleGame />
            <Footer />




        </>
    )
}