import {Request,Response} from 'express';

export const events = (req:Request,res:Response)=>{
    res.send('Oi, letho!')
}
