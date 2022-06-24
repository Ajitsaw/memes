import { createSlice } from '@reduxjs/toolkit'
// --> createSlice just a function which wraps or create a function to get all info/logics

export const savedMemes = createSlice({
    name: "memes", // The name here is state created for this function
    initialState: {value: []}, // initial state is the default state for this function, here we can pass a api value after fetching all the data
    reducers: { // reducers are default redux function which will execute any process we can to do with state like add, edit, delete, update
        addMeme: (state, action) => {
            state.value.push(action.payload)
        },
        // here addmeme is a reducer which has a state and action.. -> state defines current state of object we have --> action has payload which will update the current state

        deleteMemes: (state, action) => {
            state.value = state.value.filter((item) => item.id !== action.payload.id);
        }
        // deleteMemes is a reducer to delete memes(id) and updating the current state
    }
})

export const {addMeme, deleteMemes} = savedMemes.actions;

export default savedMemes.reducer;
// This way all the reducers inside the function will be exported to update the store in index,.