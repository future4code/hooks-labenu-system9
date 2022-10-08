import { BaseDatabase } from "./BaseDatabase";
import { Hobby_Table } from "../database/tables_names";
import {Hobby} from "../modules/Hobby"


export class HobbyDatabase extends BaseDatabase{
    //PEGAR TODOS OS HOBBIES
    public async getAllHobbies(){
        const result = await BaseDatabase.connection(Hobby_Table).select()
        return result
}
    //CRIAR HOBBIE
    public async createHobby(hobby: Hobby){ 
    await BaseDatabase.connection(Hobby_Table).insert({
             hobby
        });
    } //dando erro na sinta
}



