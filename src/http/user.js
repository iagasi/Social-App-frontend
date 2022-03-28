import { http } from "./axios";

export const $getUser = async (id) => {
  const user = await http.get("/user/" + id)
  return user.data

}
export const $getAllUsers = async () => {
  const user = await http.get("/user/all")
  return user.data

}
export const $getUserFriends = async (myid) => {
  const user = await http.get(`/user/friends/${myid}`)
  console.log(user);
  return user.data

}
export const uploadUserImage = async (file) => {
  const res = await http.post("/user/user-img", file)
  return res.data
}
export const $followUser = async (fid, id) => {

  const res = await http.put("/user/follow/" + fid, { id })
  console.log(res);
  return res

}

export const $UnFollowUser = async (fid, id) => {

  const res = await http.put("/user/unfollow/" + fid, { id })
  console.log(res);
  return res

}