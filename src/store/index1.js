// import { createStore } from "@reduxjs/toolkit";
import { createSlice, configureStore } from "@reduxjs/toolkit";


const initialState = { 
    counter: 56,
    showCounter: true
}

// function reducerFn(state = initialState, action){
//     if (action.type === 'increment') {
//         return {
//             ...state,
//             counter: state.counter + 1
//         }

//     }

//     if (action.type === 'increase') {
//         return { 
//             ...state,
//             counter: state.counter + action.amount
//         }

//     }

//     if(action.type === 'decrement'){
//         return { 
//             ...state,
//             counter: state.counter - 1
//         }
//     }

//     if(action.type === 'toggle'){
//         return{
//             ...state,
//             showCounter: !state.showCounter
//         }
//     }

//     return state;
// }

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state){
            state.counter= 345
        },
        increase(state, action){
            state.counter = state.counter + action.payload;
        },
        decrement(state){
            state.counter--;
        },
        counterToggle(state){
            state.showCounter = !state.showCounter;
        }

    }
})

// const authInitialState = {
//     isAuthenticated: false
// }

// const authSlice = createSlice({
//     name: 'auth',
//     initialState: authInitialState,
//     reducers: {
//         login(state){
//             state.isAuthenticated = true
//         },
//         logout(state){
//             state.isAuthenticated = false
//         }
//     }
// })

// const store = createStore(reducerFn);

const usersInitialState = {
    users: [
        {email: 'email1'},
        {email: 'email2'}
    ],
    currentUser: {},

}

const userSlice = createSlice({
    name: 'user',
    initialState: usersInitialState,
    reducers: {
        setUserss(state){
            state.users.push({email: 'newEmail'})
        },
        setCurrentUser(state, action){
            state.currentUser = action.payload.user
        }
    }
})


const store = configureStore({
    reducer: {counter: counterSlice.reducer, 
            //   auth: authSlice.reducer
              user: userSlice.reducer,
             }
});

export const counterActions = counterSlice.actions;
// export const authActions = authSlice.actions;
// export const userActions = userSlice.actions;

export default store;


