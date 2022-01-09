import Icon from '../../../interfaces/Icon';

export default interface Notification<T> {
    id: string;
    type:
        | 'App\\Notifications\\Announcement'
        | 'App\\Notifications\\ContentCreated'
        | 'App\\Notifications\\Invitation'
        | 'App\\Notifications\\PassswordReset'
        | 'App\\Notifications\\PasswordResetRequest';
    sender: string;
    message: string;
    url: string;
    icon: Icon;
    data: T;
    system: boolean;
    read_at: null | string[] | string;
    updated_at: string;
    created_at: string;
}
