import v1 from '..';
import AuthUser from '../models/AuthUser';
import auth from './auth.json';
jest.setTimeout(20000);
beforeAll(() => {
    global.__api__ = new v1({
        cacheEnabled: false,
        endpoint: 'https://dev.teckboard.de/api/v1',
        bearerToken: auth.bearer,
        socketEnabled: true,
        socketPort: 6002,
        socketHost: 'https://dev.teckboard.de',
    });
});
test('Auth user', async () => {
    const channel = global.__api__.socket.private('main');
    console.log(channel);
});
