import React, {useState,useEffect, useReducer} from 'react'
import Person from "./Person";
import Image from "./Image";
import { contentContext } from '../context';

const Content = () => {
    const [page,setPage] = useState(1);
    const [count,setCount] = useState(20);

        
    const imageListReducer = (imageList, action) => {
        switch(action.type){
            case 'setImage':
                return action.payload
            case 'deleteImage':
                return imageList.filter(img => img.id != action.payload)
            case 'addImage':
                return [...imageList, action.payload]
            
        }
    }

    const [imageList, imageListDispatch] = useReducer(imageListReducer, [])


   // const [imageList, setImageList] = useState([]);


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
        fetch(`https://picsum.photos/v2/list?page=${page}&limit=${count}`)
        .then(response=>response.json())
        .then(data=>{
            //console.log(data)
            imageListDispatch({type:'setImage', payload:data})
        })
    }

/*    const deleteImage = (silinecekId) => {
        setImageList(imageList.filter(img => img.id != silinecekId))
    } */

    useEffect(() => {
        getImageList()
    }, [page, count])

    const genelFonksiyon  = (cocuk, action) => {
        switch(action.type){
            case 'dov':
                return 'cocuk ' + action.payload + ' ile dövüldü.'
            case 'op':
                return 'cocuk ' + action.payload + ' ile öpüldü.'
            default:
                return 'cocuk öyle duruyor'
        }
    }

    const [cocuk, cocukDispatch] = useReducer(genelFonksiyon, '')
  
    return(
        <contentContext.Provider value={{imageListDispatch}}>
        <div className='content'>
        <div className='container'>
            <h2>Person List::</h2>
            <input type="range" step="1" min="1" max="10" value={page} onInput={(event) => {setPage(event.target.value)}} />{page}
            <input type="range" step="1" min="1" max="20" value={count} onInput={(event) => {setCount(event.target.value)}} />{count}

            <br/>{cocuk}
            <hr/>
            <button type='button' className='btn btn-primary' onClick={() => {cocukDispatch({type:'op', payload:'terlik'})}}>Öp</button>
            <button type='button' className='btn btn-danger' onClick={() => {cocukDispatch({type:'dov', payload:'terlik'})}}>Döv</button>

            <div className='row'>
                {
                    imageList.map((img) => {
                        return(
                            <Image
                            download_url={img.download_url}
                            author={img.author}
                            url={img.url}
                            widht={img.widht}
                            height={img.height}
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