import mongoose from "mongoose";
import IRegister from "../interfaces/register.interface";

export default class SchemaRegister {

    private _model: mongoose.Model<IRegister>;

    constructor() {
        const registerSchema = new mongoose.Schema<IRegister>({
            user: {
                type: String,
                required: true,
                unique: true
            },
            password: {
                type: String,
                required: true
            },
            email: {
                type: String,
                required: true
            },
            admin: {
                type: Boolean,
                default: false
            }
        }, {
            versionKey: false,
            timestamps: true
        })

        this._model = mongoose.model<IRegister>('user', registerSchema)
    }
    
    get model():mongoose.Model<IRegister>{
        return this._model
    }
}

export const registerModel = new SchemaRegister().model;