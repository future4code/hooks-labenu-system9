import { Usuario } from "./Usuario";

export class Students extends Usuario {
        constructor(
            id: string,
            name: string,
            email: string,
            birthday: string,
            class_id: string,
            protected hobby: Array<string>
        ){
            super(
                id,
                name,
                email,
                birthday,
                class_id
             )
             this.hobby = hobby
        }
}

// export type Students = {
//         id: string,
//         name: string,
//         email: string,
//         birthday: string,
//         class_id: string
// }