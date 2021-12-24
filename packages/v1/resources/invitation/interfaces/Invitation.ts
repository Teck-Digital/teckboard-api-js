import Invite from '../../../interfaces/Invite';
import { Board } from '../../boards';

export default interface Invitation extends Omit<Invite, 'invitable_id'> {
    invitable: Board;
}
