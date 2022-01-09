import { Resource } from '@teckboard-api/core';
import v1 from '../..';
import JsonResponse from '../../endpoint/JsonResponse';
import Notification from '../../models/Notification';
import { Notification as INotification } from './interfaces';
export default class Notifications extends Resource<v1> {
    private uri = '/user/notifications';

    markMultiple = async (ids: string[]): Promise<Notification[]> => {
        const response = await this.api.http.post<
            JsonResponse<INotification<unknown>[]>
        >(this.uri + '/mark', {
            notifications: ids,
        });
        return Notification.collection(response.data.data);
    };

    markAll = async (): Promise<{ ids: string[] }> => {
        const response = await this.api.http.post<
            JsonResponse<{ ids: string[] }>
        >(this.uri + '/markAll');
        return response.data.data;
    };
}
