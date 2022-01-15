import v1 from '..';
import AuthUser from '../models/AuthUser';
import auth from './auth.json';
beforeAll(() => {
    global.__api__ = new v1({
        cacheEnabled: false,
        endpoint: 'https://dev.teckboard.de/api/v1',
        bearerToken: auth.bearer,
    });
});
test('Auth user', async () => {
    const user = await global.__api__.user.get();
    user.onChange((key, value) => {
        console.log(value);
    });
    user.on('save', (model) => {
        console.log(model.status);
    });
    user.status = user.status == 1 ? 3 : 1;
    await user.save();
    expect(user).toBeInstanceOf(AuthUser);
    expect(user).toEqual(
        expect.objectContaining({
            id: expect.any(String),
        }),
    );
});
