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
const mongoose_1 = require("mongoose");
require('dotenv').config();
class connection {
    constructor() {
        this.URI = process.env.DBURL || '';
    }
    initDB() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("hola");
            try {
                let result = yield (0, mongoose_1.connect)(this.URI);
                console.log('Base de datos conectada correactamente');
            }
            catch (error) {
                console.log(error);
            }
        });
    }
}
exports.default = connection;
