"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const items_model_1 = __importDefault(require("../models/items.model"));
class itemController {
    constructor() {
        this.model = new items_model_1.default();
    }
    getItems(req, res) {
        const { category } = req.params;
        this.model.model.find({ category: category }).then((data) => {
            res.send({ data: data });
        });
    }
    getItem(req, res) {
        const { name } = req.params;
        this.model.model.find({ name: name }).then((data) => {
            res.send({ data: data });
        });
    }
}
exports.default = itemController;
