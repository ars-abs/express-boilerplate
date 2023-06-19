import hooks from '@base/hooks';
import { map } from '@laufire/utils/collection';

const setupHooks = ({ app }) => map(hooks, (fn, path) => app.get(`/${ path }`, fn));

export default setupHooks;
