import Invite from '../../../interfaces/Invite';
import ShardRole from './ShardRole';

export default interface Invitation extends Invite {
    role: ShardRole;
    max_uses: number;
    uses_left: number;
}
