export interface TLogin{
    email : string;
    password : string;
}
export const UserRole = {
    admin: 'admin',
} as const;

export type TUserRoles = keyof typeof UserRole;