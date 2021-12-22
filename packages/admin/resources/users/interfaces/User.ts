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

export default interface User {
    id: string;
    email: string;
    firstname: string;
    name: string;
    status: number;
    verified_at: string;
    icon?: Icon;
    created_at: string;
    updated_at: string;
}
