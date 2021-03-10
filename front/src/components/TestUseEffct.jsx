import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Comp = () => {
    const [newNombre, setNombre] = useState("")

    useEffect(() => {
        var data = JSON.stringify({ "email": "fhfhfe@fede.com", "password": "hola" });
        var config = {
            method: 'get',
            url: 'http://localhost:3000/api/register',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log(error);
            });


        setNombre("fran")
    }
    )

    return (
        <div>
            <h1>hola mundo {newNombre}</h1>
        </div>
    )

}


export default Comp
