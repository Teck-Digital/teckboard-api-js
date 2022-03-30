/**
 * # Models
 * Every request to the api that returns a resource (e.g. Board, User, Content)
 * will be transformed into a model. A model is no different to a json object
 * at a first glance but it provides significant advantages over plain json:
 *
 * ### Concept
 * Let's take a look at the {@link AuthUserModel | User Model} returned by the request {@link UserResource.get | api.user.get()};
 *
 * ```typescript
 * const user = api.user.get();
 * console.log(user);
 * ```
 * This will give u something like this:
 * ```js
 *     {
 *       api: <ref *1> v1 {
 *         _endpoint: 'https://dev.teckboard.de/api/v1',
 *        ...
 *       emitter: EventEmitter {
 *       ...
 *       },
 *       original: {
 *         id: '1a52be3e-165d-4b2d-b04b-d6e1823ef193',
 *         firstname: 'The',
 *         name: 'Admin',
 *         email: 'admin@admin.com',
 *         verified: false,
 *         icon: {
 *           id: '35439254-2f27-4c1c-b4ff-930924aa3f25',
 *           name: 'abbc7702-cfc4-4273-a90d-d4ef003bcb6e.jpg',
 *           width: 400,
 *           height: 400,
 *           location: 'https://dev.teckboard.de/storage/abbc7702-cfc4-4273-a90d-d4ef003bcb6e.jpg',
 *           type: 'jpg'
 *         },
 *         status: 0,
 *         settings: { language: 'de', notifications: [Object] }
 *       },
 *       __values: {
 *         id: '1a52be3e-165d-4b2d-b04b-d6e1823ef193',
 *         firstname: 'The',
 *          ...
 *       },
 *       __attributeKeys: [
 *         'id',
 *         'firstname',
 *         ...
 *       ],
 *     }
 * ```
 * With a json object you would expect something like this to be able to work out:
 * ```typescript
 *  console.log(user.name); // Outputs the name of the user
 * ```
 * But the above object doesn't look like it has the property `name`. So how does it work?
 * Under the hood, we have initialized both getter and setter methods for all of the properties listed under
 * the object `original`. This allows us to intercept once the user name is either read or updated.
 * You will find that this comes in super useful when used together with state libraries like react, vue or svelte,
 * because you can now do something like this:
 *
 * ```tsx
 * const [user, setUser] = React.useState<AuthUser>(null);
 *
 * const handleUpdateUserName = (name: String) => {
 *      user.name = name; // Triggers Change Event
 *      user.save(); // Triggers Save Event
 * }
 * const handleUpdateEmail = (email: String) => {
 *      user.email = email;
 *      user.save();
 * }
 * // By registering this hook, your UI will always be up to date with the data.
 * useEffect(() => {
 *      api.user.get().then(user => {
 *          user.on(['change', 'update'], (key, value, user) => {
 *              setUser(user);
 *          })
 *          user.on('save', () => {
 *              window.alert('Changes have been sent to server, but UI is already uptodate!');
 *          })
 *          user.listenToUpdates(); // Enable Live Updates
 *          setUser(user);
 *      })
 * }, []);
 *
 * ```
 * @module Models
 */
export { default as AuthUserModel } from './AuthUser';
export { default as BoardModel } from './Board';
export { default as ContentModel } from './Content';
export { default as InvitationModel } from './Invitation';
export { default as NotificationModel } from './Notification';
export { default as Model } from './default/Model';
export { default as Pagination } from './default/Pagination';
export { default as ResourceModel } from './default/ResourceModel';
