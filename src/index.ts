import app from './app';
import { createStudent } from './endpoints/createStudent';
import { getAllClasses } from './endpoints/getAllClasses';
import { getAllHobbies } from './endpoints/getAllHobbies';
import {createHobby} from './endpoints/createHobby'
import { getAllStudents } from './endpoints/getAllStudents';

//FUNCIONA
app.get('/hobbies', getAllHobbies) 

app.post('/createHobby', createHobby) 

// FUNCIONA 
app.get('/students', getAllStudents)

app.post('/createStudent', createStudent) 


app.get('/allClasses', getAllClasses) 
