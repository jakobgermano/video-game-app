// import { createAsyncThunk, createSlice } from  '@reduxjs/toolkit'
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

 //auto-generates an "API slice" when using createApi()
    //in this case, useGetAllRestaurantsQuery
    export const gameApi = createApi({
        reducerPath: 'gameApi',
        baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/'}),
        endpoints: (builder) => ({
            getAllGames: builder.query({
                query: () => `/games`,
            }),
        }),
    })
    
    export const {useGetAllGamesQuery} = gameApi

// export const gameReducer = createSlice({
//     name: 'gameStatus',
//      initialState: {
//         name: null,
//         genre: null,
//         rating: null,
//         user_id: null,
//     },
//     reducers: {
//       updateGame: (state, action) => {
//           return state.map((game) => {
//               if(game.id === action.payload.id){
//                   return game = action.payload
//               }
//               else{
//                   return game
//               }
//           })
         
//       },
//       createGame: (state, action) => {
//           return [...state, action.payload]
        
//       },
      
//     },
//     removeGame: (state, action) => {
//         return state.filter((game) =>{
//             return game.id !== action.payload.id
//         })
//     },
//     populate: (state, action) => {
//         return action.payload
//     }

    
//   })

  
//   const {populate, removeGame, createGame, updateGame} = gameReducer.actions
  
//   export {populate, removeGame, createGame, updateGame}
//   export default gameReducer.reducer

