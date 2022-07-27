import { createAction } from "@reduxjs/toolkit";

export const filterContacts = createAction('filter')
export const register = createAction('auth/register')
export const login = createAction('auth/login')
export const logout = createAction('auth/logout')
export const fetchUser = createAction('auth/currentUser')
