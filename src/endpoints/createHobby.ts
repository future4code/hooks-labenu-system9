import { Request, Response } from "express"
import { HobbyDatabase } from "../database/HobbiesDatabase"
import { Hobby } from "../modules/Hobby"

export const createHobby = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const name = req.body.name
        
        if (!name) {
            throw new Error("Body inválido.")
        }

          const hobby = new Hobby(
            Date.now().toString(),
            name
        )
            console.log(hobby)
        const hobbyDatabase = new HobbyDatabase()
        await hobbyDatabase.createHobby(hobby)
            
        res.status(201).send({ message: "Hobby criado", hobby: hobby })
    } catch (error) {
        res.status(errorCode).send(error)
    }
}