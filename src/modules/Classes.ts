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
                {} 

        public async getId(){
                return this.id
        }
        public async getName(){
                return this.name
        }
        public async getModule(){
                return this.module
        }
}


