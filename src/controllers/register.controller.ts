import { registerModel } from "../models/register.model";
import { Request, Response } from "express";

export class RegisterController {

    async userRegister(req: Request, res: Response) {

        try {
            const data = req.body

            await registerModel.find({ user: { $eq: data.user } }).then((dataB) => {
                if (dataB[0] != undefined) {
                    res.json({ error: 'EL USUARIO YA EXISTE', data: dataB })
                } else {
                    registerModel.insertMany(data).then((dataC) => {
                        res.json({ data: dataC })
                    })
                }

            })

        } catch (error) {
            res.send({ error: error })
        }

    }
}