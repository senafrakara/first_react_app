import { useState } from "react";
import Content from "./components/Content";
import Navbar from "./components/Navbar";
import Personel from "./components/Personel";

function App() {
 /* const [kullanidiAdi, setkullanidiAdi]= useState({
    ad: "Deneme",
    soyad: "Soyad"
  });

  const kullaniciADegistir = (adGelen, soyadGelen) => {
      setkullanidiAdi({
        ad:adGelen,
        soyad:soyadGelen
      })
  } */
  const [kullanidiAdi, setkullanidiAdi]= useState({
    ad: "Deneme",
    soyad: "Soyad"
  });

 /*  const kullaniciADegistir = (adGelen) => {
      setkullanidiAdi({...kullanidiAdi, ad:adGelen, gobek:"Göbek Adım Bu"})
  } */

  const kullaniciADegistir = ({gobekAdi, soyad}) => {
    setkullanidiAdi({...kullanidiAdi, soyad:soyad, gobek:gobekAdi})
}


  return (
    <div className="App">
        <Navbar></Navbar>
        
        <Personel degisken={kullanidiAdi} degistir={kullaniciADegistir}></Personel>
    </div>
  );
}

export default App;
