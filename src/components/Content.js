import React, {useState,useEffect} from 'react'
import Person from "./Person";
import Image from "./Image";

const Content = () => {
    const [personList, setPersonList] = useState([
        {
            isim:"Berker",
            okul:"odtü",
            cinsiyet:"kadın",
            yas:19
        },
        {
            isim:"Nursena",
            okul:"ışık",
            cinsiyet:"kadın",
            yas:19
        },
        {
            isim:"Buse",
            okul:"odtü",
            cinsiyet:"kadın",
            yas:19
        }]
    );

    const [imageList, setImageList] = useState([]);

    const getImageList = () =>{
        fetch('https://picsum.photos/v2/list?pae=1&limit=100')
        .then(response=>response.json())
        .then(data=>{
            //console.log(data)
            setImageList(data)
        })
    }

    useEffect(() => {
        getImageList()
    }, [])
    
    return(
        <div className='container'>
            <h2>Person List::</h2>
        
            <div className='row'>
                {
                    imageList.map((img) => {
                        return(
                            <Image
                            download_url={img.download_url}
                            author={img.author}
                            url={img.url}
                            w={img.widht}
                            h={img.height}
                            />
                        )
                    })
                }
{/*                 
                {
                    personList.map((person)=>{
                        return(
                            <Person
                            isim={person.isim}
                            okul={person.okul}
                            cinsiyet={person.cinsiyet}
                            yas={person.yas}
                         />
                        )
                    })
                }

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
                 /> */}
            </div>
        </div>
        
    )
}
export default Content;