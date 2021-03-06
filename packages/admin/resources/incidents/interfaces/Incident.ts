import Board from '@teckboard-api/v1/resources/boards/interfaces/Board';
import Content from '../../contents/interfaces/Content';
import User from '../../users/interfaces/User';

export default interface Incident {
    id: string;
    ticket_id: string;
    reportable: Board | Content;
    title: string;
    priority: 'high' | 'medium' | 'low';
    type: string;
    owner: User;
    created_at: string;
    updated_at: string;
}
