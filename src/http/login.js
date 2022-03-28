import { http } from "./axios";


export const $login=async(email,password)=>{

  const login=await  http.post("/login",{email,password},)
  return login.data
}

export const $register=async(data)=>{

const register=await http.post("/register",data)
return register.data
}