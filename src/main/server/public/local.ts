import { app } from './index';
import { Logger } from '../../../infra/logger/Logger';
import { logging } from '../../../infra/logger/Manager';
import { AppConfig } from '../../../infra/config/AppConfig';
import { DatabaseSession } from '../../../infra/database/session';

(async () => {
  const PUBLIC_SERVER_PORT = 30022;
  const appConfig = new AppConfig();
  const logger: Logger = logging(appConfig.getValue('LOG_LEVEL')).getLogger(
    'publicServer',
  );
  try {
    const database = new DatabaseSession([]).getSession();
    console.log('Database running', !!database);
    await app.run(PUBLIC_SERVER_PORT);
    console.log(`server running on port: ${PUBLIC_SERVER_PORT}`);
  } catch (error) {
    logger.error('application not started', error);
    process.exit(1);
  }
})();
