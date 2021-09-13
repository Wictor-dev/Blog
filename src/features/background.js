import { createSlice } from '@reduxjs/toolkit'

const initialStateValue = "";

export const backgroundSlice = createSlice({
    name: 'background',
    initialState: {value:initialStateValue},
    reducers: {
        changeColor: (state) => {
            state.value = '#000';
        },
        removeColor: (state) => {
            state.value = '#fff';
        }
    }
});

export const {changeColor} = backgroundSlice.actions;
export const {removeColor} = backgroundSlice.actions;

export default backgroundSlice.reducer;