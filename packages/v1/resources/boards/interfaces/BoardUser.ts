import ShardRole from './ShardRole';
import { IAuthUser } from '../../auth';

export default interface BoardUser extends IAuthUser {
    role: ShardRole;
}
