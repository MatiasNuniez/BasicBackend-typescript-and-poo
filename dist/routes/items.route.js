"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemRoute = void 0;
const router_1 = require("./router");
const items_controller_1 = require("../controllers/items.controller");
const auth_middleware_1 = require("../middlewares/auth.middleware");
class ItemRoute extends router_1.BaseRouter {
    constructor() {
        super(items_controller_1.ItemController, auth_middleware_1.AuthMiddleware);
    }
    routes() {
        this.router.get('/product/:category', (req, res) => this.controller.getItemsForCategory(req, res));
        this.router.get('/product/:category/:name', (req, res) => this.controller.getItem(req, res));
        this.router.post('/product', (req, res, next) => [this.middleware.verifyIdentity(req, res, next)], (req, res) => this.controller.postItem(req, res));
        this.router.put('/product/:name', (req, res, next) => [this.middleware.verifyIdentity(req, res, next)], (req, res) => this.controller.editItem(req, res));
    }
}
exports.ItemRoute = ItemRoute;
