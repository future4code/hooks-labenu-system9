import { Usuario } from "./Usuario"

export enum SPECIALITIES {
        JS = 'JS',
        CSS = 'CSS',
        React = 'REACT',
        Typescript = 'TYPESCRIPT',
        POO = 'POO (Programação Orientada a Objetos)'
}
export class Teachers extends Usuario {
        constructor(
                id: string,
                name: string,
                email: string,
                birthday: string,
                class_id: string,
                protected specialities: SPECIALITIES
        ){
                super(
                        id,
                        name,
                        email,
                        birthday,
                        class_id
                     )
                     this.specialities = specialities
        }
}

// export type Teachers = {
//         id: string,
//         name: string,
//         email: string,
//         birthday: string,
//         specialties: string,
//         class_id: string
// }