import { User } from "./user.model";

export interface Company {
    id: number;
    name: string;
    associates_doc: Document[];
    associates_user: User[];
    guests: User[];
    user_created: User;
}