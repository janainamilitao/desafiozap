import { User } from "./user.model";

export interface Company {
    id: number;
    name: string;
    associates_doc: any[];
    guests: any[];
    user_created: any;
    date_creation: Date;
    date_updated: Date;
    language: string;
    timezone: string;
}