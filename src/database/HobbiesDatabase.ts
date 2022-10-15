import { BaseDatabase } from "./BaseDatabase";
import { Hobby_Table } from "../database/tables_names";
import {Hobby} from "../modules/Hobby"
import connection from "./connection";


export class HobbyDatabase extends BaseDatabase{
    //PEGAR TODOS OS HOBBIES
    public async getAllHobbies(){
        const result = await BaseDatabase.connection(Hobby_Table).select()
        return result 
    }
    // CRIAR HOBBIE
    // public async createHobby(hobby: Hobby){ 
    // await connection(Hobby_Table).insert({
    //          id: hobby.getId(),
    //          name: hobby.getName()
    //     })
    // } //dando erro na sinta

    public createHobby = async (hobby: any) => {
        await connection(Hobby_Table).insert({
            id: hobby.id,
            name: hobby.name
        })
    }
}



