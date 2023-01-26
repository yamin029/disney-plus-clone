import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import db from '../../firebase'
import { collection, getDocs } from "firebase/firestore";


const initialState = {
    movies: [],
    status: 'idle'
}

export const moviesAsync = createAsyncThunk(
    'movie/fetchMovies',
    async () => {
        // console.log('async thunk called')
        let value = []
        const querySnapshot = await getDocs(collection(db, "movies"));
        querySnapshot.forEach((doc) => {
            // console.log('doc.data()')
            value = [...value, { id: doc.id, ...doc.data()}];
        });
        return value
    }
)

export const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(moviesAsync.pending, (state) => {
            state.status = 'loading'
        })
            .addCase(moviesAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.movies = action.payload
            })
    }
})

export const selectMovie = (state) => state.movie.movies
export const selectStatus = (state) => state.movie.status

export default movieSlice.reducer
