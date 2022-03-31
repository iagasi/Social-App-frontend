export const followUser = (user) => ({
    type: "ADD_FRIEND",
    payload: user
})

export const unfollowUser = (user) => ({
    type: "DELETE_FRIEND",
    payload: user
})

export const SetAllFriends = (friends) => (

    {
        type: "SET_ALL_FRIENDS",
        payload: friends

    })