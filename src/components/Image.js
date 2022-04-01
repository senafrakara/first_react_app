import React from "react";

const Image = (props) => {
    return <div className="col-md-3">
    <div className="card">
    <img src={props.download_url} className="card-img-top" alt="..."/>
    <div className="card-body">
        <h5 className="card-title">{props.author}</h5>
        <p className="card-text">{props.url}</p>
    </div>
    <ul className="list-group list-group-flush">
        <li className="list-group-item">{props.w}</li>
        <li className="list-group-item">{props.h}</li>
    </ul>
    <div className="card-body">
        <a href="#" className="card-link">Card link</a>
        <a href="#" className="card-link">Another link</a>
    </div>
    </div>
    </div>
}

export default Image;