import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const connectionsApi = createApi({
    reducerPath: 'connections-api',
    baseQuery: fetchBaseQuery({ 
        baseUrl: 'https://connections-api.herokuapp.com/',
        prepareHeaders: (headers, { getState }) => {
          const token = getState().auth.token
      
          // If we have a token set in state, let's assume that we should be passing it.
          if (token) {
            headers.set('Authorization', `Bearer ${token}`)
          }
      
          return headers
        }, 
    }),
    tagTypes: ['Auth', 'Contacts'],
    endpoints: (builder) => ({
      registerUser: builder.mutation({
        query: user => ({
            url: `users/signup`,
            method: 'POST',
            body: user,
        }),
        invalidatesTags: ['Auth'],
      }),
      loginUser: builder.mutation({
        query: user => ({
            url: `users/login`,
            method: 'POST',
            body: user,
        }),
        invalidatesTags: ['Auth'],
      }),
      logoutUser: builder.mutation({
        query: () => ({
            url: `users/logout`,
            method: 'POST',
        }),
        invalidatesTags: ['Auth', 'Contacts'],
      }),
      getCurrentUser: builder.query({
        query: () => `users/current`,
        providesTags: ['Auth'],
      }),
      getContacts: builder.query({
        query: () => `contacts`,
        providesTags: ['Contacts'],
      }),
      addContact: builder.mutation({
        query: contact => ({
            url: `contacts`,
            method: 'POST',
            body: contact,
        }),
        invalidatesTags: ['Contacts'],
      }),
      deleteContact: builder.mutation({
        query: id => ({
            url: `contacts/${id}`,
            method: 'DELETE',
        }),
        invalidatesTags: ['Contacts'],
      })
    }),
  })

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { 
    useRegisterUserMutation, 
    useLoginUserMutation,
    useLogoutUserMutation,
    useGetCurrentUserQuery,
    useGetContactsQuery,
    useAddContactMutation,
    useDeleteContactMutation,
} = connectionsApi