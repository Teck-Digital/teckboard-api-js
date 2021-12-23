export default interface Invite {
    id: string;
    invitable_id: string;
    invitable_type: 'board' | 'company';
    token: string;
    name: string;
    email: null | string;
    url: string;
    expired: boolean;
    expire_date: string;
    updated_at: string;
    created_at: string;
}
