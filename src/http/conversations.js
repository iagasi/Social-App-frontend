import { http } from "./axios";


export const $getConversations= async (userId)=>{
   const res=  await http.get("/conversations/"+userId)
   return res.data
}