import { BaseRouter } from "./router";
import { RegisterController } from "../controllers/register.controller";
import { AuthMiddleware } from "../middlewares/auth.middleware";

export class RegisterRouter extends BaseRouter<RegisterController,AuthMiddleware>{

    constructor() {
        super(RegisterController,AuthMiddleware)
    }

    routes(): void {
        this.router.post('/register', (req, res) => this.controller.userRegister(req, res))
    }
}