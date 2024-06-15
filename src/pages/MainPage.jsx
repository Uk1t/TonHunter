import React, { useEffect } from 'react'
import { Header } from '../components/Header'
import { Field } from '../components/field/Field'
import { ButtonStart } from '../components/button_start/ButtonStart'
import { Footer } from '../components/Footer/Footer'


function MainPage() {
    useEffect(() => {
        let chkBox = document.querySelectorAll('input')
        let mainBtn = document.querySelector('.button_start')
        mainBtn.onclick = () => {
            for (let i = 0; i < chkBox.length; i++) {
                if (chkBox[i].checked) {
                    window.sessionStorage.setItem('name', 'Дока Дог');
                }

            }
        }
    }


    )





    return (<>


        <Field />
        <ButtonStart />
        <Footer />
    </>

    )
}





export default MainPage