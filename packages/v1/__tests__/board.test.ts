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
    const user = await global.__api__.user.get();
    const boards = await user.getBoards();
    const board = boards[3];

    const oldName = board.name;

    board.name = 'test' + Math.floor(Math.random() * 100);
    await board.save();

    const newBoard = await global.__api__.boards.get(board.id);
    expect(board.name).toBe(newBoard.name);

    board.name = oldName;
    await board.save();
});
