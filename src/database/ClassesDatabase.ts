import { BaseDatabase } from "./BaseDatabase";
import { Classes_Table } from "../database/tables_names";
import {Classes} from "../modules/Classes"



export class ClassesDatabase extends BaseDatabase{
    //PEGAR TODOS AS TURMAS
    public async getAllClasses(){
        const result = await BaseDatabase.connection(Classes_Table).select()
        return result
}
    //CRIAR TURMA
    public async createClass(classe: Classes){
        await BaseDatabase.connection(Classes_Table).insert({
            id: classe.getId(),
            name: classe.getName(),
            module: classe.getModule()
        })
    }
}

