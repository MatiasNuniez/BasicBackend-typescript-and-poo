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
exports.ItemController = void 0;
const items_model_1 = require("../models/items.model");
const config_1 = require("../config");
class ItemController {
    constructor() {
        this.key = config_1.SECRETTOKEN || '';
    }
    getItemsForCategory(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { category } = req.params;
                yield items_model_1.iteModel.find({ category: category }).then((data) => {
                    res.send({ data: data });
                });
            }
            catch (error) {
                res.send({ error: error });
            }
        });
    }
    getItem(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { name } = req.params;
                yield items_model_1.iteModel.find({ name: name }).then((data) => {
                    res.send({ data: data });
                });
            }
            catch (error) {
                res.send({ error: error });
            }
        });
    }
    postItem(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const realData = req.body;
                yield items_model_1.iteModel.insertMany(realData);
            }
            catch (error) {
                res.send({ error: error });
            }
        });
    }
    editItem(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { name } = req.params;
                const update = req.body;
                yield items_model_1.iteModel.findOneAndUpdate({ name: name }, update);
                res.send({ success: 'Ingresado correctamente' });
            }
            catch (error) {
                res.send({ error: error });
            }
        });
    }
}
exports.ItemController = ItemController;
