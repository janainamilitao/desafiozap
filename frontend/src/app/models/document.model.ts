import { User } from "./user.model";

export interface Document {
    id: number;
    name: string;
    deleted: boolean;
    signature_deadline: Date;
    signed: boolean;
    user_created: User;
}