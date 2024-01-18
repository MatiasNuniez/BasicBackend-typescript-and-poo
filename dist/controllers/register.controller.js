"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerController = void 0;
const register_model_1 = __importDefault(require("../models/register.model"));
class registerController {
    constructor() {
        this.model = new register_model_1.default();
        this.data = { user: '', password: '', email: '', admin: false };
    }
    userRegister(req, res) {
        this.data = req.body;
        this.model.model.find({ user: { $eq: this.data.user } }).then((dataB) => {
            if (dataB[0] != undefined) {
                res.json({ error: 'EL USUARIO YA EXISTE', data: dataB });
            }
            else {
                this.model.model.insertMany(this.data).then((data) => {
                    res.json({ data: this.data });
                });
            }
        });
    }
}
exports.registerController = registerController;
