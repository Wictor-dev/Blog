import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const getBooks = createAsyncThunk(
    'books/getBooks', 
    async () => {
        const response = await fetch('https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=AqaEWGystNSOFqdTaHhoxJdsdRa53oYm')
        const data = await response.json()
        return data
                    
    }
)
const booksSlice = createSlice({
    name: 'books',
    initialState:{
        list: [],
        status: null,
    },
    extraReducers:{
        [getBooks.pending]: (state) => {
            state.status = 'loading'
        },
        [getBooks.fullfiled]: (state, {payload}) => {
            state.list = payload,
            state.status = 'sucess'
        },
        [getBooks.rejected]: (state) => {
            state.status = 'failed'
        }
    }
})

export default booksSlice.reducer