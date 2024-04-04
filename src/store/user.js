import { createSlice } from "@reduxjs/toolkit"

const usersInitialState = {
    currentUser: JSON.parse(localStorage.getItem('currentUser')) || {},
    signupValidations : {
        passwordsEquality : true,
        emailDuplicate : false
    }
}

const userSlice = createSlice({
    name: 'user',
    initialState: usersInitialState,
    reducers: {
        setCurrentUser(state, action){
            state.currentUser = action.payload.user
        },
        setPasswordsAreNotEqual(state){
            state.signupValidations.passwordsEquality = false
        },
        setPasswordsAreEqual(state){
            state.signupValidations.passwordsEquality = true
        },
        setEmailIsDuplicate(state){
            state.signupValidations.emailDuplicate = true
        },
        setEmailIsNotDuplicate(state){
            state.signupValidations.emailDuplicate = false
        }
    }
})

const userReducers = userSlice.reducer;
export const userActions = userSlice.actions;

export default userReducers;