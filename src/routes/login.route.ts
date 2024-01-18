import { BaseRouter } from "./router";
import loginController from "../controllers/login.controller";

export class loginRouter extends BaseRouter<loginController>{

    constructor() {
        super(loginController)
    }

    routes(): void {
        this.router.get('/login', (req,res) => this.controller.getUser(req,res))
    }
}