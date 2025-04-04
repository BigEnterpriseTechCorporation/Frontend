import { z } from "zod"

export function loginCheck(login: string):[boolean,string]{
  const schema = z.string().regex(/[a-zA-Z]/, { message: 'Contain at least one letter.' })
    
  if(!schema.safeParse(login).success){
    return [false, 'Логин должен содержать только латинские буквы']
  }

  return [true,'']
}