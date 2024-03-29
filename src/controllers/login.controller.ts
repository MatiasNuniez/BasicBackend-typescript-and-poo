import { loginModel } from "../models/login.model";
import { Request, Response } from "express"
import jsonwebtoken from "jsonwebtoken"
import { SECRETTOKEN } from "../config";


export class LoginController {

    public key: string;

    constructor() {
        this.key = SECRETTOKEN || ''
    }

    async getUser(req: Request, res: Response) {
        try {
            const { user, password } = req.body
            await loginModel.find({ user: { $eq: user } }).then((data) => {
                if ((user === data[0].user) && (password === data[0].password)) {
                    const payload = {
                        check: true
                    }
                    const token = jsonwebtoken.sign(payload, this.key, { expiresIn: '15m' })
                    res.cookie('token', token)
                    res.cookie('user', data[0].user)
                    res.json({ data: data, token: token })
                } else {
                    res.json({ error: 'Contrasena o usuario invalido' })
                }
            })

        } catch (error) {
            res.send({ error: error })
        }
    }

}