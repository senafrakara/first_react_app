import React from 'react'

const Personel = (props) => {
  return (
    <div>
        <h1>{props.degisken.ad} - {props.degisken.soyad} -- {props.degisken.gobek}</h1>
        <button className="first" onClick={() => props.degistir("Nursena", "Rabia")}>Kullanıcı Adını Değiştir</button>
        <button onClick={() => props.degistir({gobekAdi:"Göbek Adım", soyad:"Yeni Soyadım"})}>Kullanıcı Adını Değiştir</button>

    </div>
    
  )
}

export default Personel