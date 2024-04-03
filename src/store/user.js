import { createSlice } from "@reduxjs/toolkit"

const usersInitialState = {
    currentUser: JSON.parse(localStorage.getItem('currentUser')) || {},
}

const userSlice = createSlice({
    name: 'user',
    initialState: usersInitialState,
    reducers: {
        setCurrentUser(state, action){
            state.currentUser = action.payload.user
        }
    }
})

const userReducers = userSlice.reducer;
export const userActions = userSlice.actions;

export default userReducers;