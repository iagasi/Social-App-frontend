import { http } from "./axios";


export const $getMessages=async(currentChatId)=>{
  const  res=await http.get("/messages/"+currentChatId)
  return res.data

}


export const $createMessage=async (data)=>{
const res=http.post("/messages", data)
return res.data
}