import React from 'react'


export default ({ peli }) =>


(
    <div>
        <div className="card-movie" key={peli.id}>
            <div className="card-body">
                <img src={peli.Poster} className="card-poster" />
                <h3 className="card-title">{peli.Title}</h3>
                <h4 className="card-text">{peli.Year}</h4>
                <h4 className="card-text">{peli.Type}</h4>
                <a href="#" className="btn btn-primary">Ver Peli</a>
                <a href="#" className="btn btn-primary">Favorito</a>
            </div>
        </div>
    </div>
)






