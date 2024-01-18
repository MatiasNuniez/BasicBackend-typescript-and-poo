import { BaseRouter } from "./router";
import { registerController } from "../controllers/register.controller";

export class registerRouter extends BaseRouter<registerController>{

    constructor() {
        super(registerController)
    }

    routes(): void {
        this.router.post('/register', (req,res) => this.controller.userRegister(req,res))
    }
}