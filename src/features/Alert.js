import {createSlice} from "@reduxjs/toolkit"

export const Alerts = createSlice({
    name: "alert",
    initialState: {value: {
        class: "",
        message: ""
    }
    },
    reducers: {
        setAlert: (state, action) => {
            state.value = action.payload    
        }
            
    }
})
export const {setAlert} = Alerts.actions;
export default Alerts.reducer;