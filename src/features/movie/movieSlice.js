import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import db from '../../firebase'
import { collection, getDocs } from "firebase/firestore";


const initialState = {
    movies: [],
    status: 'idle',
    loading: false
}

export const moviesAsync = createAsyncThunk(
    'movie/fetchMovies',
    async () => {
        let value = []
        const querySnapshot = await getDocs(collection(db, "movies"));
        querySnapshot.forEach((doc) => {
            value = [...value, { id: doc.id, ...doc.data() }];
        });
        return value
    }
)

export const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        setMovies: (state, action) => {
            state.movies = action.payload
        },
        setLoading: (state) => {
            state.loading = !state.loading
        }
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

export const { setMovies, setLoading } = movieSlice.actions
export const selectMovie = (state) => state.movie.movies
export const selectStatus = (state) => state.movie.status
export const selectLoading = (state) => state.movie.loading


export default movieSlice.reducer
