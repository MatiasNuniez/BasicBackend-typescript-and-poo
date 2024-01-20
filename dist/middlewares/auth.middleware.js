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
exports.AuthMiddleware = void 0;
const config_1 = require("../config");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const register_model_1 = require("../models/register.model");
class AuthMiddleware {
    constructor() {
        this.key = config_1.SECRETTOKEN || "";
    }
    verifyIdentity(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { token } = req.cookies;
                const { user } = req.cookies;
                const verify = jsonwebtoken_1.default.verify(token, this.key);
                if (user != '') {
                    yield register_model_1.registerModel.find({ user: { $eq: user } }).then((data) => {
                        if ((data[0].admin === true) && (verify)) {
                            next();
                        }
                        else {
                            res.send({ error: "No tienes los permisos para realizar esta funcion" });
                        }
                    });
                }
                else {
                    res.send({ error: 'El usuario no existe' });
                }
            }
            catch (error) {
            }
        });
    }
}
exports.AuthMiddleware = AuthMiddleware;
