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
        public async getId(){
            return this.id
        }
        public async getName(){
            return this.name
        }
        public async getEmail(){
            return this.email
        }
        public async getBirthday(){
            return this.birthday
        }
        public async getClassId(){
            return this.class_id
        }
        public async getHobby(){
            return this.hobby
        }
}

