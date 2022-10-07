export class Usuario{
    constructor(
        protected id: string,
        protected name: string,
        protected email: string,
        protected birthday: string,
        protected class_id: string
    ){
        this.id = id;
        this.name = name;
        this.email = email;
        this.birthday = birthday;
        this.class_id = class_id
    }
}