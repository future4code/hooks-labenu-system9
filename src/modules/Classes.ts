export enum MODULE {
        ZERO,
        UM,
        DOIS,
        TRES,
        QUATRO,
        CINCO, 
        SEIS
}
export class Classes{
        constructor (
                protected id: string, 
                protected name: string,
                protected module: MODULE
                )
                {
                this.id = id;
                this.name = name;
                this.module = module
        }
}


// export type  Classes = {
//         id: string,
//         name: string,
//         module: string

// }