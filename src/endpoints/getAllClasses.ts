import { Request, Response } from "express"
import { ClassesDatabase } from "../database/ClassesDatabase"

export const getAllClasses = async ( req: Request, res: Response )=> {
    let errorCode = 400
  try {

    const classDatabase = new ClassesDatabase()
    const result = await classDatabase.getAllClasses()
    res.status(200).send(result)
   
} catch (error) {
    res.status(errorCode).send(error)
}
  
}