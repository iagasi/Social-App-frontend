import { createContext, useContext, useReducer } from "react"
import { AuthReducer } from "./AuthReducer"
import { FriendReducer } from "./friends/FrendsReducer"
import { PostReducer } from "./posts/PostsReducer"

const initialState={
    profilePicture:"",
    followings:[],
    followers:[],
    userName:"",
    createdAt:"",
    error:false,
    allPosts:[],
    comments:[],
    friends:[]
 
}

export const GlobalContext=createContext(initialState)

export const GlobalContextProvider=({children})=>{
    const[state,dispatch]=useReducer(AuthReducer,initialState)
    const[postState,postsDispatch]=useReducer(PostReducer,initialState)
    const[comments,commentsDispatch]=useReducer(PostReducer,initialState)
    const[friends,friendsDispatch]=useReducer(FriendReducer,initialState)

    return(
        <GlobalContext.Provider value={
        {user:state.user,dispatch,
        posts:postState.allPosts,postsDispatch,
        comments:comments.comments,commentsDispatch,
        friends:friends.friends,friendsDispatch
        }}>

{children}
        </GlobalContext.Provider>
    )
}

export const AuthStateValue=()=>useContext(GlobalContext)
export const PostStateValue=()=>useContext(GlobalContext)
export const UserStateValue=()=>useContext(GlobalContext)
export const CommentsStateValue=()=>useContext(GlobalContext)
export const FriendsStateValue=()=>useContext(GlobalContext)