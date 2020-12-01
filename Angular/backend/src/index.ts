import 'module-alias/register';
import { App } from './app';

const application = new App();
application.start();

export { application };
