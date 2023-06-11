import axios from 'axios'

import { IMovie} from './interface'

export class Movie {
    apiKey: string;
    baseurl: string;
    discoverurl: string;
    discovermovies: IMovie[]
    constructor() {
        this.apiKey = '46c5ab3a7ed8c71a8b32bb28e9ff8643'
        this.baseurl = 'https://api.themoviedb.org/3'
        this.discoverurl = `${this.baseurl}/discover/movie?api_key=${this.apiKey}`
        this.discovermovies = []
    }
    async init() {
        const response = await axios.get(this.discoverurl)
        return response.data.results
    }
    getDiscoverMovies() {
        return this.discovermovies
    }
    getdiscoverMoviessortedbypopularity() {
        return this.discovermovies.sort((a: IMovie, b: IMovie) => b.popularity - a.popularity).map((Movie: IMovie) => Movie.title)
    }
    getaveragepopularityofdiscoverMovies() {
        return this.discovermovies.reduce((accumulator:number, Movie: IMovie) => accumulator + Movie.popularity,0,) / this.discovermovies.length;
    }
    getmostpopularMovie() {
        return this.discovermovies.sort((
            a: IMovie, b: IMovie
        ) => b.popularity - a.popularity,);
    }
    showchildrenMovies() {
        return this.discovermovies.filter((Movie: IMovie) => !Movie.adult).map((Movie:IMovie) => Movie.title)
    }
    getMoviesaftermarch() {
        return this.discovermovies.filter((movie: IMovie) => {
            const date = new Date (movie.release_date)
            const isaftermarch2023 = date.getFullYear() >= 2023 && date.getMonth() >= 4
            return isaftermarch2023
        }).map((movie: IMovie) => ({title: movie.title, release_date: movie.release_date,}))
        //console.log(this.discovermovies.map((movie: IMovie) => new Date(movie.release_date).getFullYear(),),)
    }
}