import { createReducer } from '@reduxjs/toolkit';
import { filterContacts, registerUser, login, logout, fetchUser } from './actions';
 
const initialAuthState = {
  user: {name: null, email: null},
  token: null,
  isLoggedIn: false,
}

const filterContactsReducer = (state, action) => {

  state = action.payload
  return state
}

const registerUserReducer = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;

  console.log('state after registerUserReducer', state)

  return state
}

const loginUserReducer = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;

  console.log('state after loginUserReducer', state)

  return state
}

const logoutUserReducer = (state) => {
  state = initialAuthState

  console.log('state after logoutUserReducer', state)

  return state

}

const fetchUserReducer = (state, action) => {
  state.user = {...action.payload};
  console.log('action from fetchuser reducer', action)
  state.isLoggedIn = true;
}

export const filterReducer = createReducer('',{
  [filterContacts]: filterContactsReducer,
})

export const authReducer = createReducer(initialAuthState, {
  [registerUser]: registerUserReducer,
  [login]: loginUserReducer,
  [logout]: logoutUserReducer,
  [fetchUser]: fetchUserReducer,
})

export const contactsReducer = createReducer([],{
})

