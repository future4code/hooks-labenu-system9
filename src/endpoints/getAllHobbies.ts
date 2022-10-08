import { Request, Response } from "express"
import { HobbyDatabase } from "../database/HobbiesDatabase"

export const getAllHobbies = async ( req: Request, res: Response )=> {
    let errorCode = 400
  try {

    const hobbyDatabase = new HobbyDatabase()
    const result = await hobbyDatabase.getAllHobbies()
    res.status(200).send(result)
   
} catch (error) {
    res.status(errorCode).send(error)
}
  
}