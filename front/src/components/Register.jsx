import React, { useState } from 'react'
import axios from 'axios'
import { Link, useHistory } from 'react-router-dom'



export default () => {
    const history = useHistory()

    const [newUser, setNewUser] = useState("")
    const [newPassword, setNewPassword] = useState("")

    const handleUser = (evt) => {
        setNewUser(evt.target.value)
    }

    const handlePassword = (evt) => {
        setNewPassword(evt.target.value)
    }

    const handleSubmit = (evt) => {
        evt.preventDefault()
        axios.post('/api/register', { email: newUser, password: newPassword })
            .then(() => history.push('/'))
    }


    return (
        <div className="register">
            <div className="col-sm-8 col-md-7 py-4">
                <form onSubmit={handleSubmit}>
                    <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
                    <label for="inputEmail" className="visually-hidden">Email address</label>
                    <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required="" onChange={handleUser} />
                    <label for="inputPassword" className="visually-hidden">Password</label>
                    <input type="password" id="inputPassword" className="form-control" placeholder="Password" required="" onChange={handlePassword} />
                    <div className="checkbox mb-3">
                    </div>
                    <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                </form>
            </div>
        </div>
    )
}

