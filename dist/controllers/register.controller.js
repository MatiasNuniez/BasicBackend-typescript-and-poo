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
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterController = void 0;
const register_model_1 = require("../models/register.model");
class RegisterController {
    userRegister(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = req.body;
                yield register_model_1.registerModel.find({ user: { $eq: data.user } }).then((dataB) => {
                    if (dataB[0] != undefined) {
                        res.json({ error: 'EL USUARIO YA EXISTE', data: dataB });
                    }
                    else {
                        register_model_1.registerModel.insertMany(data).then((dataC) => {
                            res.json({ data: dataC });
                        });
                    }
                });
            }
            catch (error) {
                res.send({ error: error });
            }
        });
    }
}
exports.RegisterController = RegisterController;
