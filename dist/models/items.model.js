"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.iteModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
class SchemaItems {
    constructor() {
        const itemSchema = new mongoose_1.default.Schema({
            name: {
                type: String,
                required: true,
                unique: true
            },
            category: {
                type: String,
                required: true
            },
            price: {
                type: Number,
                required: true
            },
            talle: {
                type: String,
                require: true
            },
            index: {
                type: Boolean
            }
        }, {
            versionKey: false,
            timestamps: true
        });
        this._model = mongoose_1.default.model('items', itemSchema);
    }
    get model() {
        return this._model;
    }
}
exports.default = SchemaItems;
exports.iteModel = new SchemaItems().model;
