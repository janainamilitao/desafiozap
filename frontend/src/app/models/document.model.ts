import { User } from "./user.model";

export interface Document {
    id: number;
    name: string;
    date_updated: Date;
    date_creation: Date;
    deleted: boolean;
    signature_deadline: Date;
    signed: boolean;
    user_created: any;
}