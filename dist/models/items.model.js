"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
class schemaItems {
    constructor() {
        this.itemSchema = new mongoose_1.default.Schema({
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
        this.model = mongoose_1.default.model('items', this.itemSchema);
        this.itemSchema;
        this.model;
    }
}
exports.default = schemaItems;
