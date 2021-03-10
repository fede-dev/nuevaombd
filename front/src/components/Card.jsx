import * as React from 'react';
import { Link } from 'react-router-dom'


export default ({ pelis, selectMovie }) => {
    console.log(pelis)
    return (
        <div className="hola">

            {pelis.map(peli => (
                <div className="card" key={peli.imdbID}>
                    <div className="card-body">
                        <img src={peli.Poster} className="card-poster" />
                        <h3 className="card-title">{peli.Title}</h3>
                        <h4 className="card-text">{peli.Year}</h4>
                        <h4 className="card-text">{peli.Type}</h4>
                        <Link to={`/descripcion/${peli.imdbID}`} onClick={() => selectMovie(peli.imdbID)}>Ver Peli</Link>

                    </div>
                </div>

            ))}
        </div>
    )
}








