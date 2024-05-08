import express, { Express } from 'express';
import serverConfig from './configs/serverConfig';
import apiRouter from './routes';
import sampleQueueProducer from './producers/sampleQueueProducer';
import SampleWorker from './workers/SampleWorker';

const app: Express = express();
app.use('/api', apiRouter);

app.listen(serverConfig.PORT, () => {
  console.log(`listening on port ${serverConfig.PORT}`);

  SampleWorker('SampleQueue');

  sampleQueueProducer('SampleJob', {
    name: 'Faraz',
    company: 'Microsoft',
    position: 'SDE 2 L61',
    location: 'Remote | BLR | Noida',
  });
});
