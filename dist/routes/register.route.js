"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterRouter = void 0;
const router_1 = require("./router");
const register_controller_1 = require("../controllers/register.controller");
const auth_middleware_1 = require("../middlewares/auth.middleware");
class RegisterRouter extends router_1.BaseRouter {
    constructor() {
        super(register_controller_1.RegisterController, auth_middleware_1.AuthMiddleware);
    }
    routes() {
        this.router.post('/register', (req, res) => this.controller.userRegister(req, res));
    }
}
exports.RegisterRouter = RegisterRouter;
