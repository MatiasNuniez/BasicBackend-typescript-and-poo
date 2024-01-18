import schemaRegister from "../models/register.model";
import registerInterface from "../interfaces/register.interface";
import { Request, Response } from "express";

export class registerController {

    public model: schemaRegister;
    public data: registerInterface;


    constructor() {
        this.model = new schemaRegister()
        this.data = { user: '', password: '', email: '', admin: false }
    }

    userRegister(req: Request, res: Response) {

        this.data = req.body

        this.model.model.find({ user: { $eq: this.data.user } }).then((dataB) => {
            if (dataB[0] != undefined) {
                res.json({ error: 'EL USUARIO YA EXISTE', data: dataB })
            } else {
                this.model.model.insertMany(this.data).then((data) => {
                    res.json({data: data})
                })
            }

        })
    }
}