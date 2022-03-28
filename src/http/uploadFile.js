import { http } from "./axios";


export const $uploadFile=async(image)=>{

  const login=await  http.post("/post-img",image)
  return login
}

