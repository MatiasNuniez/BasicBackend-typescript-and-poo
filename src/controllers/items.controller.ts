import { iteModel } from "../models/items.model";
import { registerModel } from "../models/register.model";
import { Request, Response } from "express";
import { SECRETTOKEN } from "../config";
import jwt from 'jsonwebtoken'

export class ItemController {

    public key: string;

    constructor() {
        this.key = SECRETTOKEN || ''
    }

    async getItemsForCategory(req: Request, res: Response) {
        try {
            const { category } = req.params;
            await iteModel.find({ category: category }).then((data) => {
                res.send({ data: data })
            })
        } catch (error) {
            res.send({ error: error })
        }
    }


    async getAllItems(req: Request, res: Response) {
        try {
            await iteModel.find({}).then((data) => {
                res.send({ data: data })
            })
        } catch (error) {
            res.send({ error: error })
        }
    }


    async getItem(req: Request, res: Response) {
        try {
            const { name } = req.params;
            await iteModel.find({ name: name }).then((data) => {
                res.send({ data: data })
            })
        } catch (error) {
            res.send({ error: error })
        }
    }

    async postItem(req: Request, res: Response) {
        try {
            const realData = req.body
            await iteModel.insertMany(realData)
            res.send({success:'Agregado correctamete'})
        } catch (error) {
            res.send({ error: error })
        }
    }

    async editItem(req: Request, res: Response) {
        try {
            const { name } = req.params
            const update = req.body
            await iteModel.findOneAndUpdate({name:name}, update)
            res.send({success:'Actualizado correctamente'})
        } catch (error) {
            res.send({error:error})
        }
    }


    async deleteItem(req: Request, res: Response) {
        try {
            const { name } = req.params
            const update = req.body
            await iteModel.findOneAndDelete({name:name}, update)
            res.send({success:'Elimiado correctamente correctamente'})
        } catch (error) {
            res.send({error:error})
        }
    }


}