import { createReducer } from '@reduxjs/toolkit';
import { filterContacts, register, login, logout, fetchUser } from './actions';
 
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

  return state
}

const loginUserReducer = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;

  return state
}

const logoutUserReducer = (state) => {
  state = initialAuthState

  return state

}

const fetchUserReducer = (state, action) => {
  state.user = {...action.payload};
  state.isLoggedIn = true;
}

export const filterReducer = createReducer('',{
  [filterContacts]: filterContactsReducer,
})

export const authReducer = createReducer(initialAuthState, {
  [register]: registerUserReducer,
  [login]: loginUserReducer,
  [logout]: logoutUserReducer,
  [fetchUser]: fetchUserReducer,
})

export const contactsReducer = createReducer([],{
})

