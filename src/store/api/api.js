import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

// Initialize an empty api service that we'll inject endpoints into later as needed
export const api = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://ch-pricelistbe-production.up.railway.app/',
    // baseUrl: 'http://localhost:8080/',

        prepareHeaders: (headers) => {
            const accessToken = localStorage.getItem('accessToken'); 
            // console.log("hello "+accessToken)         
            if (accessToken) {
                headers.set('Authorization', `Bearer ${accessToken}`)
            }
            return headers;
        }
    }),
    endpoints: () => ({}),
});

export default api;
