import * as path from 'path';
import * as fastKoa from 'fast-koa';
import config from './config';

fastKoa.initApp({ routesPath: config.routesPath });

fastKoa
  .listen(config.port)
  .then(server => {
    const addr = server.address();
    console.log(`Server started. listen ${addr.port}`);
  })
  .catch(console.error);
