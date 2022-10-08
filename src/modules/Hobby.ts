  export class Hobby{
    constructor(
        protected id: string,
        protected name: string
    ){}
    
    public async  getId() {
    return this.id
}
    public async getName(){
        return this.name
    }

}

