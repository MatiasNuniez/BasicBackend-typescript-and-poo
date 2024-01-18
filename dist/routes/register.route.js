"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerRouter = void 0;
const router_1 = require("./router");
const register_controller_1 = require("../controllers/register.controller");
class registerRouter extends router_1.BaseRouter {
    constructor() {
        super(register_controller_1.registerController);
    }
    routes() {
        this.router.post('/register', (req, res) => this.controller.userRegister(req, res));
    }
}
exports.registerRouter = registerRouter;
