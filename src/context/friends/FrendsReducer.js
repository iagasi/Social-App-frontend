export const FriendReducer = (state, action) => {



    switch (action.type) {
        
        case "SET_ALL_FRIENDS":
          console.log(state);
            return {

        ...state,
        friends:[state.friends,...action.payload]
             
            }
        // case "ADD_FRIEND": console.log(state.user)
        //     return {
        //         ...state,
        //         user: { ...state.user, followers: [...state.user.followers, action.payload] }
        //     }
        // case "DELETE_FRIEND":
        //     return {
        //         ...state,
        //         user: { ...state.user, followers: [...state.user.followers.filter(el => el !== action.payload)] }


        //     }

        default:
         
            return state






    }










}