import { createSlice } from '@reduxjs/toolkit'


export const dark = createSlice({
    name: "darkTheme", 
    initialState: {value: false}, 
    reducers: { 
        setDark: (state, action) => {
            state.value = action.payload
        },
        
    }
})

export const {setDark} = dark.actions;

export default dark.reducer;
