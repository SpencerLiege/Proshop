import { USERS_URL } from "../constant.js"
import { apiSlice } from "./apiSLice.js"

export const userApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}/login`,
                method: 'POST',
                body: data,
                credentials: 'include'
            }),
        }),
        register: builder.mutation({
            query: (data)=> ({
                url: `${USERS_URL}`,
                method: 'POST',
                body: data,
                
            })
        }),
        logout: builder.mutation({
            query: ()=> ({
                url: `${USERS_URL}/logout`,
                method: 'POST'
            }) 
        }),
        // profile:""
    })
})


export const { useLoginMutation, useLogoutMutation, useRegisterMutation } = userApiSlice