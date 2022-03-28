export const PostReducer = (state, action) => {
    switch (action.type) {

        case "SET_ALL_POSTS":
          
            return {
                ...state,
                allPosts: action.payload,
            }
        case "DELETE_POST":
         
            return {
                ...state,
                allPosts: [...state.allPosts.filter(post => post._id !== action.payload)]
            }

        case "UPLOAD_POST":
            return {
                ...state,
                allPosts: [...state.allPosts, action.payload]
            }

        case "DELETE_COMMENT":
            return{
                ...state,
                allPosts:[...state.allPosts.comments.filter(comment=>comment._id!==action.payload)]
            }



            case "ADD_COMMENT":
                
//          
           
                return {
                    ...  state,
              comments:[
                  ...state.comments,
                action.payload

              ]
                }
                 
                
                
               
            
    

        default: return { ...state }
    }





}