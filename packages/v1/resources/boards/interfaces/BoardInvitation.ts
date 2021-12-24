import Invite from '../../../interfaces/Invite';
import ShardRole from './ShardRole';

export default interface BoardInvitation extends Invite {
    role: ShardRole;
    max_uses: number;
    uses_left: number;
}
