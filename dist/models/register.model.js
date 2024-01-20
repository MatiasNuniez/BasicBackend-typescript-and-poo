"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
class SchemaRegister {
    constructor() {
        const registerSchema = new mongoose_1.default.Schema({
            user: {
                type: String,
                required: true,
                unique: true
            },
            password: {
                type: String,
                required: true
            },
            email: {
                type: String,
                required: true
            },
            admin: {
                type: Boolean,
                default: false
            }
        }, {
            versionKey: false,
            timestamps: true
        });
        this._model = mongoose_1.default.model('user', registerSchema);
    }
    get model() {
        return this._model;
    }
}
exports.default = SchemaRegister;
exports.registerModel = new SchemaRegister().model;
