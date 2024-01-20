import mongoose from "mongoose";
import IItems from "../interfaces/items.interfaces";

export default class SchemaItems {

    private _model: mongoose.Model<IItems>

    constructor(){

        const itemSchema = new mongoose.Schema<IItems>({
            name: {
                type: String,
                required: true,
                unique: true
            },
            category: {
                type: String,
                required: true
            },
            price: {
                type: Number,
                required: true
            },
            talle: {
                type: String,
                require: true
            },
            index: {
                type: Boolean
            }
        }, {
            versionKey: false,
            timestamps: true
        })

        this._model = mongoose.model<IItems>('items', itemSchema)
    }

    get model():mongoose.Model<IItems>{
        return this._model;
    }
    
}

export const iteModel = new SchemaItems().model;