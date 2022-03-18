import React from 'react'

const Person = (props) => {
  return (
    <div className="col-md-3">
        <div class="card">
        <img src="https://www.unicef.org/sites/default/files/styles/two_column/public/UN0470658_0.jpg?itok=YoJmiJ-h" class="card-img-top" alt="..."/>
        <div class="card-body">
            <h5 class="card-title">{props.isim}</h5>
            <p class="card-text">{props.ozgecmis}</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">{props.cinsiyet}</li>
            <li class="list-group-item">{props.yas}</li>
            <li class="list-group-item">{props.okul}</li>
        </ul>
        <div class="card-body">
            <a href="#" class="card-link">Card link</a>
            <a href="#" class="card-link">Another link</a>
        </div>
        </div>
    </div>
  )
} 
//arrow function deniyor buna

export default Person