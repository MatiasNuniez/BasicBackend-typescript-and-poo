import mongoose from "mongoose";

export default class schemaItems {

    public itemSchema

    public model

    constructor(){
        this.itemSchema = new mongoose.Schema({
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
        this.model = mongoose.model('items', this.itemSchema)
    }
    
}