import connection from "../database/connection";
import {Request, Response} from 'express';
import { Students_Table } from "../database/tables_names";

export const getAllStudents = async ( req: Request, res: Response ): Promise<void> => {
  
    const students = await connection(Students_Table);
    
    res.status(200).send(students)
}
