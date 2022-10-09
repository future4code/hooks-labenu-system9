  export class Hobby{
    
    constructor(
        protected  id: string,
        protected name: string
    ){
    }
    
    async  getId(): Promise<string> {
        return this.id;
    }

    public async getName(): Promise<string>{
        return this.name
    }

    public async setId(id: string){
        this.id = id;
    }
    public  async setName(id: string){
        this.id = id;
    }

}

