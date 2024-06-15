import React, { useEffect } from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer/Footer'
import RoleGame from '../components/RoleGame/RoleGame'





export default function SecondPage() {
    useEffect(() => {
        let a = window.sessionStorage.getItem('name')
        console.log(a);
    })

    return (


        <>

            <div className="field second__field"></div>
            <RoleGame />
            <Footer />




        </>
    )
}
