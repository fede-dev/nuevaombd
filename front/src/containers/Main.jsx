import React from 'react'
import axios from 'axios'
import { Switch, Route } from 'react-router-dom';
import Card from '../components/Card'
import Header from '../components/Header'
import Movie from '../components/Movie'
import Footer from '../components/Footer'
import SingleMovie from '../components/SingleMovie'
import Register from '../components/Register'
import TestUseEffct from '../components/TestUseEffct'

conosle.log("hola")

//Here is your key: a01c681a
class Main extends React.Component {
    constructor() {
        super(),
            this.state = {
                pelis: [],
                selectedMovie: {},
                inputValue: ""
            }
        this.selectMovie = this.selectMovie.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)


    }

    componentDidMount() {
        axios.get('http://www.omdbapi.com/?apikey=a01c681a&s=Movie')
            .then(res => res.data.Search)
            .then(serverPelis => this.setState({ pelis: serverPelis }))
    }

    selectMovie(peliId) {
        axios.get(`http://www.omdbapi.com/?i=${peliId}&apikey=a01c681a`)
            .then(res => res.data)
            .then(serverMovie => {
                this.setState({ selectedMovie: serverMovie }
                )
            })
    }

    handleChange(evt) {
        const value = evt.target.value
        this.setState({
            inputValue: value
        })
    }

    handleSubmit(evt) {
        evt.preventDefault()
        axios.get(`http://www.omdbapi.com/?apikey=a01c681a&s=${this.state.inputValue}`)//type
            .then(res => res.data.Search)
            .then((peliculas) => this.setState({
                pelis: peliculas
            }))
    }

    render() {
        const { pelis, selectedMovie } = this.state
        return (
            <div>
                <Header />
                <Register />
                <Movie handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
                <Switch>
                    <Route exact path='/' render={() => <Card pelis={pelis} selectMovie={this.selectMovie} />} />
                    <Route path='/descripcion' render={({ }) => <SingleMovie peli={selectedMovie} />} />
                </Switch>
                <TestUseEffct />
                <Footer />
            </div>
        )
    }
}

export default Main


