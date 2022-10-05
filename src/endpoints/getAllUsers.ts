import { Request, Response } from 'express'
import connection from '../connection'

export const getAllUsers = async ( req: Request, res: Response ): Promise<void> => {
    //Endpoint apenas para teste de funcionamento da requisição no banco de dados
    const users = await connection('labecommerce_users');
    
    res.status(200).send(users)
}