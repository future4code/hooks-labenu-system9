import connection from "./connection";

//TABELA DE ESTUDANTES
const createStudentsTable = async () => {
    try {
        await connection.raw(`
        CREATE TABLE IF NOT EXISTS Students_Table(
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL UNIQUE,
            birthday DATE NOT NULL,
            class_id VARCHAR(255) NOT NULL UNIQUE,
            FOREIGN KEY (class_id) REFERENCES Students_Table(id)        
        );
        `)

        console.log("Students_Table criada com sucesso.")
    } catch (error) {
        console.log("Erro ao criar Students_Table.")
        console.log(error)
    }
}
createStudentsTable()

//TABELA DE HOBBIES

const createHobbiesTable = async () => {
    try {
        await connection.raw(`
        CREATE TABLE IF NOT EXISTS Hobby_Table(
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR(255) NOT NULL UNIQUE
        )
    `)

        console.log("Hobby_Table criada com sucesso.")
    } catch (error) {
        console.log("Erro ao criar Hobby_Table.")
        console.log(error)
    }

}
createHobbiesTable()

//TABELA HOBBIES ESTUDANTES

const createHobbiesStudents = async () => {
    try {
        await connection.raw(`
        CREATE TABLE IF NOT EXISTS Hobby_Student(
            id VARCHAR(255) PRIMARY KEY,
            student_id VARCHAR(255) NOT NULL UNIQUE,
            hobby_id VARCHAR(255) NOT NULL UNIQUE,
            FOREIGN KEY (hobby_id) REFERENCES Hobby_Table(id),
            FOREIGN KEY (student_id) REFERENCES Students_Table(id)
        )
    `)
        console.log("Hobby_Student criada com sucesso.")
    } catch (error) {
        console.log("Erro ao criar Hobby_Student.")
        console.log(error)
    }
}
createHobbiesStudents()

//TABELA DE DOCENTES

const createTeachersTable = async () => {
    try {
        await connection.raw(`
        CREATE TABLE IF NOT EXISTS Teachers_Table ( 
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL UNIQUE,
            birthday DATE NOT NULL,
            class_id VARCHAR(255) NOT NULL UNIQUE,
            FOREIGN KEY (class_id) REFERENCES Classes_Table(id)      
       )
    `)
        console.log("Teachers_Table criada com sucesso.")
    } catch (error) {
        console.log("Erro ao criar Teachers_Table.")
    }
}
createTeachersTable()

//TABELA DE ESPECIALIDADES DOS DOCENTES

const createSpecialitiesTeachersTable = async () => {
    try {
        await connection.raw(`
        CREATE TABLE IF NOT EXISTS Specialities_Teachers (
            id VARCHAR(255) PRIMARY KEY,
            specialty_id VARCHAR(255) NOT NULL UNIQUE,
            teacher_id VARCHAR(255) NOT NULL UNIQUE,
            FOREIGN KEY (specialty_id) REFERENCES Specialities_Table(id),
            FOREIGN KEY (teacher_id) REFERENCES Teachers_Table(id)
        )
    `)
        console.log("Specialities_Teachers criada com sucesso.")
    } catch (error) {
        console.log(error)
    }

}
createSpecialitiesTeachersTable()

//TABELA DE ESPECIALIDADES

const createSpecialitiesTable = async () => {
    try {
        await connection.raw(`
        CREATE TABLE IF NOT EXISTS Specialities_Table(
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR(255) NOT NULL
        )
    `)
        console.log("Specialities_Table criada com sucesso.")
    } catch (error) {
        console.log("Erro ao criar Specialities_Table.")

    }
}
createSpecialitiesTable()

//TABELA DE TURMAS

const createClassesTable = async () => {
    try {
        await connection.raw(`
        CREATE TABLE IF NOT EXISTS Classes_Table ( 
        id VARCHAR(255) PRIMARY KEY,
        name VARCHAR(100) NOT NULL, 
        module VARCHAR(100) DEFAULT 0
       );
    `)
        console.log("Classes_Table criada com sucesso.")
    } catch (error) {
        console.log(error)
    }
}
createClassesTable()