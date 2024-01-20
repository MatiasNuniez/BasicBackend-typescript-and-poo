import mongoose, { mongo } from "mongoose";
import ILogin from "../interfaces/login.interface";

export default class SchemaLogin {

    private _model: mongoose.Model<ILogin>;

    constructor(){
        const loginSchema = new mongoose.Schema<ILogin>({
            user: {
                type: String,
                required:true,
                unique: true
            },
            password: {
                type: String,
                required: true
            }
        }, {
            versionKey: false,
            timestamps: true
        })
        this._model = mongoose.model<ILogin>('users', loginSchema)
    }

    get model(): mongoose.Model<ILogin>{
        return this._model;
    }
}

export const loginModel = new SchemaLogin().model;