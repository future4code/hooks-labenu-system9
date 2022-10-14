import { BaseDatabase } from "./BaseDatabase";
import { Students_Table } from "../database/tables_names";
import {Students} from "../modules/Students"


export class StudentsDatabase extends BaseDatabase{

    //JUNTAR TABELA ESTUDANTES COM CLASSES
    //E PEGAR ESTUDANTES DE UMA CLASSE
    public async getStudentOfClass(studentId:string, hobbyId: string){
        const result = await BaseDatabase.connection.raw(`
            SELECT * FROM Students_Table 
            JOIN Classes_Table ON Students_Table.id = class_id
        `)
        return result

  }
    //PEGAR TODOS OS STUDENTS
    public async getAllStudents(){
        const result = await BaseDatabase.connection(Students_Table).select()
        return result
}
  
    //CRIAR STUDENT
    public async createStudent(student: Students){
      
        await BaseDatabase.connection(Students_Table).insert({
            id: Date.now().toString(),
            name: student.getName(),
            email: student.getEmail(),
            birthday: student.getBirthday(),
            class_id:Date.now().toString(),
            hobby: student.getHobby()
        })
    } 
}
