import 'dotenv/config';
import {router} from './config/routers/router';
import {dataSource} from './config/database/dataSource';





(async () => {
  await dataSource.initialize();
  console.log('database start');

  router.listen(process.env.PORT, () => console.log(`app start port: ${process.env.PORT}`));
})();