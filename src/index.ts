import 'dotenv/config';
import {server} from './config/server/server';
import {dataSource} from './config/database/dataSource';





(async () => {
  await dataSource.initialize();
  console.log('database start');

  server.listen(process.env.PORT, () => console.log(`app start port: ${process.env.PORT}`));
})();