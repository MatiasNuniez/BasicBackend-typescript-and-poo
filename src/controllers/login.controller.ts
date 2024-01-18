import schemaLogin from "../models/login.model";
import { Request, Response} from "express"
import jsonwebtoken from "jsonwebtoken"
import loginInteface from "../interfaces/login.interface";


export default class loginController {

    public key: any;
    public type: loginInteface;
    public model: schemaLogin;

    constructor() {
        this.key = process.env.SECRETTOKEN
        this.type = { user: '', password: '' }
        this.model = new schemaLogin()
    }

    getUser(req: Request, res: Response) {
        this.type.user = req.body.user
        this.type.password = req.body.password
        console.log(this.type);
        this.model.model.find({ user: { $eq: this.type.user } }).then((data) => {
            if ((this.type.user === data[0].user) && (this.type.password === data[0].password)) {
                const payload = {
                    check: true
                }
                const token = jsonwebtoken.sign(payload, this.key, { expiresIn: '15m' })
                res.json({ data:data, token:token })
            } else {
                res.json({ error: 'Contrasena o usuario invalido' })
            }
        })
    }

}