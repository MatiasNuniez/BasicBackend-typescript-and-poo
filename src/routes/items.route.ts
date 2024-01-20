import { BaseRouter } from "./router";
import { ItemController } from "../controllers/items.controller";
import { AuthMiddleware } from "../middlewares/auth.middleware";

export class ItemRoute extends BaseRouter<ItemController, AuthMiddleware>{

    constructor() {
        super(ItemController, AuthMiddleware)
    }

    routes(): void {
        this.router.get('/product/:category', (req, res) => this.controller.getAllItems(req, res));
        this.router.get('/product/:category/:name', (req, res) => this.controller.getItem(req, res))
        this.router.get('/product/:category', (req, res) => this.controller.getItemsForCategory(req, res));
        this.router.post('/product', (req,res,next) => [this.middleware.verifyIdentity (req,res,next)] , (req, res) => this.controller.postItem(req, res))
        this.router.put('/product/:name', (req,res,next) => [this.middleware.verifyIdentity (req,res,next)] , (req, res) => this.controller.editItem(req, res))
        this.router.put('/product/:name', (req,res,next) => [this.middleware.verifyIdentity (req,res,next)] , (req, res) => this.controller.deleteItem(req, res))
    }

}