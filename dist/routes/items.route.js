"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.itemRoute = void 0;
const router_1 = require("./router");
const items_controller_1 = __importDefault(require("../controllers/items.controller"));
class itemRoute extends router_1.BaseRouter {
    constructor() {
        super(items_controller_1.default);
    }
    routes() {
        this.router.get('/product/:category', (req, res) => this.controller.getItems(req, res));
        this.router.get('/product/:category/:name', (req, res) => this.controller.getItem(req, res));
    }
}
exports.itemRoute = itemRoute;
