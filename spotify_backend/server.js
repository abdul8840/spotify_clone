import express from 'express';
import cors from 'cors';
import 'dotenv/config';

const app = express();
const port = process.env.PORT || 4000;

//middleware
app.use(express.json());
app.use(cors());

//initializing route

app.get('/', (req, res) => res.send("Api working"))

app.listen(port, () => console.log(`Server running on ${port}`))