import express, { Express } from 'express';
import serverConfig from './configs/serverConfig';
import apiRouter from './routes';
import sampleQueueProducer from './producers/sampleQueueProducer';
import SampleWorker from './workers/SampleWorker';
import bullBoardAdapter from './configs/bullBoardConfig';
const app: Express = express();

app.use('/api', apiRouter);
app.use('/ui', bullBoardAdapter.getRouter());

app.listen(serverConfig.PORT, () => {
  console.log(`listening on port ${serverConfig.PORT}`);
  console.log(`BullBoard dashboard running on: http://localhost:${serverConfig.PORT}/ui`);
  SampleWorker('SampleQueue');

  sampleQueueProducer(
    'SampleJob',
    {
      name: 'Sanket',
      company: 'Microsoft',
      position: 'SDE 2 L61',
      location: 'Remote | BLR | Noida',
    },
    2,
  );

  sampleQueueProducer(
    'SampleJob',
    {
      name: 'Faraz',
      company: 'Microsoft',
      position: 'SDE 2 L61',
      location: 'Remote | BLR | Noida',
    },
    1,
  );

  sampleQueueProducer(
    'SampleJob',
    {
      name: 'Ram',
      company: 'Ciena',
      position: 'SDE',
      location: 'Noida',
    },
    3,
  );

  sampleQueueProducer(
    'SampleJob',
    {
      name: 'Teena',
      company: 'Vouchagram',
      position: 'Frontend Developer',
      location: 'Noida',
    },
    4,
  );
});
