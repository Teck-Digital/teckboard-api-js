import PartialBoard from './PartialBoard';
import Notification from '../../../interfaces/Notification';

interface BoardAnnouncementData {
    board: PartialBoard;
    imageable_type: 'user' | 'board' | 'company';
    imageable_id: string;
}
type Announcement = Notification<BoardAnnouncementData>;
export default Announcement;
