import JsonResponse from '../endpoint/JsonResponse';
import Icon from '../interfaces/Icon';
import INotification from '../resources/notifications/interfaces/Notification';
import Model from './default/Model';
export default class Notification
    extends Model<INotification<unknown>>
    implements INotification<unknown>
{
    id!: string;
    type!:
        | 'App\\Notifications\\Announcement'
        | 'App\\Notifications\\ContentCreated'
        | 'App\\Notifications\\Invitation'
        | 'App\\Notifications\\PassswordReset'
        | 'App\\Notifications\\PasswordResetRequest';
    sender!: string;
    message!: string;
    url!: string;
    icon!: Icon;
    data: unknown;
    system!: boolean;
    read_at!: string | string[] | null;
    updated_at!: string;
    created_at!: string;

    private _endpoint: string;

    constructor(notification: INotification<unknown>) {
        super(notification);
        this._endpoint =
            this._api.user.baseUri + '/notifications/' + notification.id;
    }
    public static collection = (
        notifications: INotification<unknown>[],
    ): Notification[] => {
        return notifications.map((n) => new Notification(n));
    };

    markAsRead = async (): Promise<Notification> => {
        const response = await this._api.http.post<
            JsonResponse<INotification<unknown>>
        >(this._endpoint + '/mark');

        this.read_at = response.data.data.read_at;
        return this;
    };
}
