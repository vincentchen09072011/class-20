/*import axios from 'axios'

import { IMovie} from './interface'
const ApiKey = '46c5ab3a7ed8c71a8b32bb28e9ff8643'
const baseurl = 'https://api.theIIIMoviedb.org/3'
const discoverurl = `${baseurl}/discover/IIIMovie?api_key=${ApiKey}`
const getDiscoverMovies = async () => {
    const response = await axios.get(discoverurl)
    console.log(response.data.results.map((movie: IMovie) => movie.title))
}
//exercise 2
const getdiscoverMoviessortedbypopularity = async () => {
    const response = await axios.get(discoverurl)
    const sortedMovietitles = response.data.results.sort((a: IMovie, b: IMovie) => b.popularity - a.popularity).map((Movie: IMovie) => Movie.title)
    console.log(sortedMovietitles)
}
//exercise 3
const getaveragepopularityofdiscoverMovies = async () => {
    const response = await axios.get(discoverurl)
    const averagepopularity = response.data.results.reduce((accumulator:number, Movie: IMovie) => accumulator + Movie.popularity,0,) / response.data.results.length;
}
//exercise 4
const getmostpopularMovie = async () => {
    const response = await axios.get(discoverurl)
    const sortedMovies = response.data.results.sort((
        a: IMovie, b: IMovie
    ) => b.popularity - a.popularity,);
    console.log(sortedMovies[0].title)
}
//exercise 5
const showchildrenMovies = async () => {
    const response = await axios.get(discoverurl)
    const childrenMovies = response.data.results.filter((Movie: IMovie) => !Movie.adult).map((Movie:IMovie) => Movie.title)
    console.log(childrenMovies)
}
//exercise 6
const getMoviesaftermarch = async () => {
    const response = await axios.get(discoverurl)
    response.data.results.filter((movie: IMovie) => {
        const date = new Date (movie.release_date)
        const year = date.getFullYear()
        const month = date.getMonth()
        const isaftermarch2023 = year >= 2023 && month >= 4
        return isaftermarch2023

    }).map((movie: IMovie) => ({title: movie.title, release_date: movie.release_date,}))
    console.log(response.data.results.map((movie: IMovie) => new Date(movie.release_date).getFullYear(),),)
}*/
import { forEachTrailingCommentRange } from 'typescript'
import {Movie} from './movie'
const fetchData = async () => {
    const movie = new Movie()
    await movie.init()
    const movies = movie.getDiscoverMovies
    console.log(movies)
    const sortedmovies = await movie.getdiscoverMoviessortedbypopularity
    console.log(sortedmovies)
    const averagepopularity = await movie.getaveragepopularityofdiscoverMovies
    console.log(averagepopularity)
    const mostpopularmovie = await movie.getmostpopularMovie
    console.log(mostpopularmovie)
    const childrenmovie = await movie.showchildrenMovies
    console.log(childrenmovie)
    const moviesaftermarch = await movie.getMoviesaftermarch
    console.log(moviesaftermarch)
}
fetchData()
