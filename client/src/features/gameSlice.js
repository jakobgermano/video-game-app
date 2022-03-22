import { creatAsyncThunk, createSlice } from  '@reduxjs/toolkit'

const initialState = {
    games: [],
}

//asyncthunkfunction
export const fetchGames = creatAsyncThunk(
    'game list',
    async () => {
        const response = await (await fetch('/games')).json()
        return response
    }
)

export const gameReducer = createSlice({
    name: 'games', 
    initialState: initialState,
    reducers: {

    }

})

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

export const {createGame} = gameReducer.actions
export const gameList = (state) => state.games
export default gameReducer.reducer