export const setAllposts=(payload)=>(

    {
        type:"SET_ALL_POSTS",
       payload:payload
    }
)

export const deletePost=(id)=>{

    return{
        type:"DELETE_POST",
       payload:id
    }
}



export const uploadSinglePost=(post)=>{

    return{
        type:"UPLOAD_POST",
       payload:post
    }
}

export const setComment=(comment)=>{

    return{
        type:"ADD_COMMENT",
       payload:comment
    }
}

export const deleteComment=(id)=>{

    return{
        type:"DELETE_COMMENT",
       payload:id
    }
}