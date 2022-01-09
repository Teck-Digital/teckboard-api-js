import v1 from '..';
import Pagination from '../models/default/Pagination';
import auth from './auth.json';
beforeAll(() => {
    global.__api__ = new v1({
        cacheEnabled: false,
        endpoint: 'https://dev.teckboard.de/api/v1',
        bearerToken: auth.bearer,
    });
});
test('Auth User Notifications', async () => {
    const user = await global.__api__.user.get();
    const paginator = await user.getNotifications();
    expect(paginator).toBeInstanceOf(Pagination);
    const firstChunk = paginator.getCurrentChunk();
    expect(firstChunk).toBeInstanceOf(Array);
    expect(await paginator.loadNextChunk()).toBe(paginator);
    if (paginator.chunk != paginator.lastChunk) {
        const secondChunk = paginator.getCurrentChunk();
        expect(secondChunk).not.toBe(firstChunk);
    }
});
