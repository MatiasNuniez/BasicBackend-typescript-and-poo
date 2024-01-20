"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
class SchemaLogin {
    constructor() {
        const loginSchema = new mongoose_1.default.Schema({
            user: {
                type: String,
                required: true,
                unique: true
            },
            password: {
                type: String,
                required: true
            }
        }, {
            versionKey: false,
            timestamps: true
        });
        this._model = mongoose_1.default.model('users', loginSchema);
    }
    get model() {
        return this._model;
    }
}
exports.default = SchemaLogin;
exports.loginModel = new SchemaLogin().model;
