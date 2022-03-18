import React from 'react'
import Person from "./Person";

function Content(){
    return(
        <div className='container'>
            <h2>Person List::</h2>
            <div className='row'>
                <Person
                    isim='Nursena'
                    okul='Işık Üniversitesi'
                    cinsiyet='kadın'
                    yas='24'
                    ozgecmis='Hebele Hübele'
                 />
                   <Person
                    isim='Ahmet'
                    okul='Işık Üniversitesi'
                    cinsiyet='erkek'
                    yas='24'
                    ozgecmis='Hebele Hübele222'
                 />
            </div>
        </div>
        
    )
}
export default Content;