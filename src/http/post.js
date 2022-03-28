import { http } from "./axios";


export const $getallPosts = async (id) => {
  const post = await http.get("/post/" + id)
  return post
}

export const $receveTimelinePost = async (userId) => {
  const posts = await http.post("/post/timeline", { userId })

  return posts.data

}

export const $createPost = async (body) => {
  const res = await http.post("/post", body)
  return res.data
}
export const $deletePost = async (userId, postId) => {
  const body={ userId:userId, postId:postId }
  const res = await http.post("/post/delete",body )
  return res.data
}
