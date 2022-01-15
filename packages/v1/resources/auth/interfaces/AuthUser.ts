import Icon from '../../../interfaces/Icon';

export interface UserSettings {
    language: string;
    notifications: {
        announcements: UserNotificationsSettings;
        contents: UserNotificationsSettings;
        developer_updates: UserNotificationsSettings;
        invitations: UserNotificationsSettings;
    };
}

export interface UserNotificationsSettings {
    push?: boolean;
    mail?: boolean;
}

export default interface AuthUser {
    id: string;
    email: string;
    firstname: string;
    name: string;
    status: number;
    verified: boolean;
    settings: UserSettings;
    icon?: Icon | Blob;
}
