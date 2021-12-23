import ShardRole from './ShardRole';
import { AuthUser } from '../../auth';

export default interface BoardUser extends AuthUser {
    role: ShardRole;
}
