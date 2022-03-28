export const AuthReducer = (state, action) => {

    switch (action.type) {
        case "LOGIN_START":
            return {
                user: null,
                isFetching: false,
                error: false
            }

        case "LOGIN_SUCESS":
            return {
                user: action.payload,
                // isFetching: false,
                // error: false
            }

        case "LOGIN_FAILURE":
            return {
                user: null,
                isFetching: false,
                error: action.payload
            }

        case "ADD_FRIEND":console.log(state.user) 
            return {
  
                ...state,
              
                user:{...state.user,followers:[...state.user.followers,action.payload]}
              
              
              }
         case "DELETE_FRIEND":
            return {
  
                ...state,
              
                user:{...state.user,followers:[...state.user.followers.filter(el=>el!==action.payload)]}
              
              
              }

        default:
            return state
    }

}