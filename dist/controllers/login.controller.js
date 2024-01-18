"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const login_model_1 = __importDefault(require("../models/login.model"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class loginController {
    constructor() {
        this.key = process.env.SECRETTOKEN;
        this.type = { user: '', password: '' };
        this.model = new login_model_1.default();
    }
    getUser(req, res) {
        this.type.user = req.body.user;
        this.type.password = req.body.password;
        console.log(this.type);
        this.model.model.find({ user: { $eq: this.type.user } }).then((data) => {
            if ((this.type.user === data[0].user) && (this.type.password === data[0].password)) {
                const payload = {
                    check: true
                };
                const token = jsonwebtoken_1.default.sign(payload, this.key, { expiresIn: '15m' });
                res.json({ data: data, token: token });
            }
            else {
                res.json({ error: 'Contrasena o usuario invalido' });
            }
        });
    }
}
exports.default = loginController;
