"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginController = void 0;
const login_model_1 = require("../models/login.model");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = require("../config");
class LoginController {
    constructor() {
        this.key = config_1.SECRETTOKEN || '';
    }
    getUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { user, password } = req.body;
                yield login_model_1.loginModel.find({ user: { $eq: user } }).then((data) => {
                    if ((user === data[0].user) && (password === data[0].password)) {
                        const payload = {
                            check: true
                        };
                        const token = jsonwebtoken_1.default.sign(payload, this.key, { expiresIn: '15m' });
                        res.cookie('token', token);
                        res.cookie('user', data[0].user);
                        res.json({ data: data, token: token });
                    }
                    else {
                        res.json({ error: 'Contrasena o usuario invalido' });
                    }
                });
            }
            catch (error) {
                res.send({ error: error });
            }
        });
    }
}
exports.LoginController = LoginController;
