import Channel from './Channel';
import Icon from '../../../interfaces/Icon';
import ShardRole from './ShardRole';

export interface BoardChatSettings {
    chat: {
        enabled: boolean;
        required_level: number;
    };
}
export default interface Board {
    id: string;
    name: string;
    color_scheme: string;
    channel: Channel;
    owner: boolean;
    owner_id: string;
    company_id: string;
    icon?: Icon;
    latest_content: string;
    roles: ShardRole[];
    settings: BoardChatSettings;
    slug: string;
    uri: string;
    url: string;
    user_role: ShardRole;
    created_at: string;
    updated_at: string;
}
