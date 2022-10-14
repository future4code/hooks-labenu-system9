import connection from "../database/connection";
import { Request, Response } from 'express';
import { Students_Table } from "../database/tables_names";
import { Students } from "../modules/Students";



export const createStudent = async (req: Request, res: Response): Promise<void> => {
    let errorCode = 400
    try {
        const { name, email, birthday, hobby } = req.body

        if (!name || !email || !birthday || !hobby) {
            throw new Error("Some item is missing. Check and try again!")
        }

        const newStudent = new Students(
            Date.now().toString(),
            name,
            email,
            birthday,
            Date.now().toString(),
            hobby
        )
        //TENTANDO ADICIONAR A COLUNA HOBBY QUANDO O ESTUDANTE FOR CRIADO
        //ERRO NA SINTAXE SQL
        
        // await connection.raw(`
        //         ALTER TABLE Students_Table ADD hobby(${newStudent.getHobby})

        //    `)

        await connection(Students_Table).insert(
            newStudent
        )

        res.status(200).send(newStudent)

    } catch (error) {
        console.log(error)
    }

}
