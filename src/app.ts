import express from 'express';
import { Request, Response, NextFunction } from "express";
const app = express();
import bodyParser from 'body-parser';
import cors from 'cors'
// import { etapUnRoutes } from './routes/etapeUn'

app.use((req: Request, res: Response, next: NextFunction) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(bodyParser.json());
app.use(cors());

// app.use('/api/etapeUn', etapUnRoutes);

export { app };