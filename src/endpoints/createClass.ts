import { Request, Response } from 'express'
import BaseDatabase from '../database/BaseDatabase';
import { ClassesDatabase } from '../database/ClassesDatabase';
import { Classes_Table } from '../database/tables_names';
import { Classes } from '../modules/Classes';

export const createClass = async (req: Request, res: Response) => {
    let statusCode = 400;
    const id = Date.now().toString();
    const { name, modulo } = req.body

    const newClass = new Classes(
        id,
        name,
        modulo
    )

    await BaseDatabase.connection(Classes_Table).insert(newClass);
    
    res.send('Classe Criada');
}