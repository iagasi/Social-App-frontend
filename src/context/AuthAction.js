export const LoginStart=(user)=>({
    type:"LOGIN_START"
})

export const LoginSucess=(user)=>({
    type:"LOGIN_SUCESS",
    payload:user
})

export const LoginFaulure=(error)=>({
    type:"LOGIN_FAILURE",
    payload:error

})
export const followUser=(user)=>({
    type:"ADD_FRIEND",
    payload:user
})

export const unfollowUser=(user)=>({
    type:"DELETE_FRIEND",
    payload:user
})