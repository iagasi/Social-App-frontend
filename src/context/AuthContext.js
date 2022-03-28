import { createContext, useContext, useReducer } from "react"
import { AuthReducer } from "./AuthReducer"
import { PostReducer } from "./posts/PostsReducer"

const initialState={
  email:"",
    profilePicture:"",
    followings:[],
    followers:[],
    userName:"",
    createdAt:"",
    error:false,
    allPosts:[],
    comments:[]
 
}

export const GlobalContext=createContext(initialState)

export const GlobalContextProvider=({children})=>{
    const[state,dispatch]=useReducer(AuthReducer,initialState)
    const[postState,postsDispatch]=useReducer(PostReducer,initialState)
    const[comments,commentsDispatch]=useReducer(PostReducer,initialState)

    return(
        <GlobalContext.Provider value={{user:state.user,dispatch,posts:postState.allPosts,postsDispatch,comments:comments.comments,commentsDispatch}}>

{children}
        </GlobalContext.Provider>
    )
}

export const AuthStateValue=()=>useContext(GlobalContext)
export const PostStateValue=()=>useContext(GlobalContext)
export const UserStateValue=()=>useContext(GlobalContext)
export const CommentsStateValue=()=>useContext(GlobalContext)