import React from 'react'


export default ({ handleChange, handleSubmit }) => (

    <div className="container">
        <h3>What movie are you looking for? Go and enjoy</h3>
        <div>
            <form className="d-flex">
                <input className="form-control mr-sm-2" type="text" placeholder="Search" onChange={handleChange} />
                <button className="btn btn-secondary my-2 my-sm-0" type="submit" onClick={handleSubmit}>Search</button>
            </form>
        </div>
    </div>
)








