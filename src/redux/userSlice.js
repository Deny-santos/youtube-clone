import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    currentUser: null,
    loading: false,
    error: false
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        loginStart: (state) => {
            state.loading = true
        },
        loginSuccess: (state, action) => {
            state.loading = false
            state.currentUser = action.payload // payload is the user, you can see it in the dev tools
        },
        loginFailure: (state) => {
            state.loading = false
            state.error = true
        },
        logout: (state) => {
            return initialState
            // state.currentUser = null,
            // state.loading = false,
            // state.error = false
        }
    },
    
})

export const { loginFailure, loginStart, loginSuccess, logout } = userSlice.actions

export default userSlice.reducer