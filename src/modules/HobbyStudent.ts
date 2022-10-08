export type HobbyDB = {
    id: string,
    student_id: string,
    hobby_id: string
}

export class HobbyStudent  {
   constructor( 
    public id: string,
    public studentId: string,
    public hobbyId: string
    ) {}
}