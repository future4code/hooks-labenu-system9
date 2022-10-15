import { Request, Response } from "express"
import { HobbyDatabase } from "../database/HobbiesDatabase"
import { Hobby } from "../modules/Hobby"

export const createHobby = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const name = req.body.name
        const id = Date.now().toString()
        if (!name) {
            throw new Error("Body inválido.")
        }

        const hobby = new Hobby(id, name)

        const hobbyDatabase = new HobbyDatabase()
        await hobbyDatabase.createHobby(hobby)
            
        res.status(201).send({ hobby })
    } catch (error) {
        res.status(errorCode).send(error)
    }
}