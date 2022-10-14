export enum SpecialitiesName {
        JS = 'JS',
        CSS = 'CSS',
        React = 'REACT',
        Typescript = 'TYPESCRIPT',
        POO = 'POO (Programação Orientada a Objetos)'
}

export class Specialities {
        constructor(
                protected id: string,
                protected name: SpecialitiesName
        ){}
             
}

