import { BaseDatabase } from "./BaseDatabase";
import { Hobby_Student } from "../database/tables_names";


export class HobbyStudentData extends BaseDatabase{
    //PEGAR TODOS OS HOBBIES DO ESTUDANTE PELO ID DO ESTUDANTE E O ID DO HOBBY CRIADO
    public async getStudentHobbies(studentId:string, hobbyId: string){
        const result = await BaseDatabase.connection.raw(`
            SELECT * FROM Hobby_Student 
            JOIN Students_Table ON Hobby_Student.id = studentId
            JOIN Hobby_Table ON Hobby_Student.id = hobbyId
        `)
        return result
}
  
}

