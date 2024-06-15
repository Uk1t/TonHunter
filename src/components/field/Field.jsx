import './Field.css'
import React from 'react';









export function Field() {

    return (<>
        <div className="field main__field" onClick={() => {
            return (
                document.querySelector('.button_start').style.filter = "none",
                document.querySelector('.button_start').innerHTML = "<a href='/SecondPage'>Treasure <br> Hunt</a>"
            );

        }} >
            <input type='Radio' name='input' className='field-cross cross1 ' ></input>
            <input type='Radio' name='input' className='field-cross cross2 '  ></input>
            <input type='Radio' name='input' className='field-cross cross3 '  ></input>
            <input type='Radio' name='input' className='field-cross cross4 '  ></input>
            <input type='Radio' name='input' className='field-cross cross5 '  ></input>



        </div >


    </>)

}


