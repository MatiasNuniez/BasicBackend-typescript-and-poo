"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginRouter = void 0;
const router_1 = require("./router");
const login_controller_1 = __importDefault(require("../controllers/login.controller"));
class loginRouter extends router_1.BaseRouter {
    constructor() {
        super(login_controller_1.default);
    }
    routes() {
        this.router.get('/login', (req, res) => this.controller.getUser(req, res));
    }
}
exports.loginRouter = loginRouter;
