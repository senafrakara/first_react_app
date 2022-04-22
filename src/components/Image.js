import React from "react";
import { useContext } from "react";
import { contentContext } from "../context";

const Image = (props) => {

   const {page, deleteImage} = useContext(contentContext)
    const {id, author,url, w, h} = props
    return <div className="col-md-3">
    <div className="card">
    <img src={`https://picsum.photos/id/${id}/300/300`} className="card-img-top" alt="..."/>
    <div className="card-body">
        <h5 className="card-title">{author}</h5>
        <p className="card-text">{url}</p>
    </div>
    <ul className="list-group list-group-flush">
        <li className="list-group-item">{w}</li>
        <li className="list-group-item">{h}</li>
    </ul>
    <div className="card-body">
        <button type="button" className="btn btn-danger" onClick={ () => {deleteImage(id)}}>Delete</button>
        
    </div>
    </div>
    </div>
}

export default Image;