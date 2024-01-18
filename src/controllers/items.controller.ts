import schemaItems from "../models/items.model";
import { Request, Response } from "express";

export default class itemController {
    
    public model: schemaItems;

    constructor() {
        this.model = new schemaItems()
    }

    getItems(req: Request, res: Response) {
        const { category } = req.params;
        this.model.model.find({category:category}).then((data)=>{
            res.send({data:data})
        })
    }


    getItem(req: Request, res: Response) {
        const { name } = req.params;
        this.model.model.find({name:name}).then((data)=>{
            res.send({data:data})
        })
    }

}