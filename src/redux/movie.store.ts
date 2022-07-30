import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../consts/api.const";
import { IMovie } from "../models/movie.model";
import { storageService } from "../util/storage.service";

interface IMovieState {
    movies: IMovie[],
    currMovie: IMovie | null,
}

export const getAllMovies = createAsyncThunk(
    'getAllMovies',
    async (): Promise<IMovie[]> => {
        let movies = storageService.load('movies')
        if (movies) return movies;
        else {
            movies = (await axios.get(`${BASE_URL}/movie`)).data
            storageService.store('movies', movies)
            return movies;
        }
    }
)

export const getSearchedMovie = createAsyncThunk(
    'getSearchedMovie',
    async (searchedByValue: string | null): Promise<IMovie> => {
        const res = (await axios.get(`${BASE_URL}/movie/search/${searchedByValue}`)).data
        
        if (res.Error) return Promise.reject(res);
        return res;
    }
)

export const getCurrMovie = createAsyncThunk(
    'getCurrMovie',
    async (id: string | null): Promise<IMovie> => {

        const res = (await axios.get(`${BASE_URL}/movie/${id}`)).data
        return res;
    }
)

export const movieSlice = createSlice({
    name: 'movieStore',

    initialState: {
        movies: [],
        currMovie: null,
    } as IMovieState,

    reducers: {},

    extraReducers: (builder) => {
        builder.addCase(getAllMovies.fulfilled, (state, action) => {
            state.movies = action.payload;
        })
        builder.addCase(getSearchedMovie.fulfilled, (state, action) => {
            state.movies = []
            state.movies.push(action.payload)
        })
        builder.addCase(getSearchedMovie.rejected, (state, action) => {
            state.movies = []
        })
        builder.addCase(getCurrMovie.fulfilled, (state, action) => {
            state.currMovie = action.payload
        })
    }
})