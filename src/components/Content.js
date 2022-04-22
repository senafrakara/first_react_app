import React, {useState,useEffect} from 'react'
import Person from "./Person";
import Image from "./Image";
import { contentContext } from '../context';

const Content = () => {
    const [page,setPage] = useState(1);
    const [imageList, setImageList] = useState([]);


   /* const [personList, setPersonList] = useState([
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
    ); */

    const getImageList = () =>{
        fetch(`https://picsum.photos/v2/list?page=${page}&limit=100`)
        .then(response=>response.json())
        .then(data=>{
            //console.log(data)
            setImageList(data)
        })
    }

    const deleteImage = (silinecekId) => {
        setImageList(imageList.filter(img => img.id != silinecekId))
    }

    useEffect(() => {
        getImageList()
    }, [page])
    
    return(
        <contentContext.Provider value={{page, deleteImage}}>
        <div className='content'>
        <div className='container'>
            <h2>Person List::</h2>
            <input type="range" step="1" min="1" max="10" value={page} onInput={(event) => {setPage(event.target.value)}} />{page}
            <hr/>
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
                            id={img.id}
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
        </div>
        </contentContext.Provider>
    )
}
export default Content;