"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginRouter = void 0;
const router_1 = require("./router");
const login_controller_1 = require("../controllers/login.controller");
const auth_middleware_1 = require("../middlewares/auth.middleware");
class LoginRouter extends router_1.BaseRouter {
    constructor() {
        super(login_controller_1.LoginController, auth_middleware_1.AuthMiddleware);
    }
    routes() {
        this.router.get('/login', (req, res) => this.controller.getUser(req, res));
    }
}
exports.LoginRouter = LoginRouter;
