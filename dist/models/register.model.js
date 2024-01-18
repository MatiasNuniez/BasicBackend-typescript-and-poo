"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
class schemaRegister {
    constructor() {
        this.registerSchema = new mongoose_1.default.Schema({
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
        this.model = mongoose_1.default.model('user', this.registerSchema);
    }
}
exports.default = schemaRegister;
