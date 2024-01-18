import { BaseRouter } from "./router";
import { Request, Response } from "express";
import itemController from "../controllers/items.controller";

export class itemRoute extends BaseRouter<itemController>{

    constructor(){
        super(itemController)
    }

    routes(): void {
        this.router.get('/product/:category', (req,res) => this.controller.getItems(req,res));
        this.router.get('/product/:category/:name', (req,res) => this.controller.getItem(req,res))
    }

}