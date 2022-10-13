import express from 'express'
import cors from 'cors'
import bodyParser  from 'body-parser';

//import routes
import Router from "./Routes/usersRoute.js"

// init Express
const app = express();

//use express json
app.use(express.json());

// use cors & bodyParser
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//use Router
app.use(Router);


app.listen(5000, () => console.log('Server running at http://localhost:5000'));