import app from './app';
import { createStudent } from './endpoints/createStudent';
import { getAllClasses } from './endpoints/getAllClasses';
import { getAllHobbies } from './endpoints/getAllHobbies';
import { getAllUsers } from './endpoints/getAllUsers';
import {createHobby} from './endpoints/createHobby'

app.get('/user', getAllUsers)

app.get('/hobbies', getAllHobbies) 

app.post('/createHobby', createHobby) //nao funciona

app.get('/allClasses', getAllClasses) 

app.post('/createStudent', createStudent) //nao funciona