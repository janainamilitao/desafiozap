export interface User {
    id: number;
    name: string;
    email: string;
    date_last_pass_reset: Date | null;
    verifed_email: boolean;
    password: string;
    date_updated: Date;
    date_creation: Date;
}