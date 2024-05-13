import { createBullBoard } from '@bull-board/api';
import { BullMQAdapter } from '@bull-board/api/bullMQAdapter';
import { ExpressAdapter } from '@bull-board/express';

import sampleQueue from '../queues/sampleQueue';

const serverAdapter = new ExpressAdapter();
serverAdapter.setBasePath('/ui');

createBullBoard({
  queues: [new BullMQAdapter(sampleQueue)],
  serverAdapter,
  options: {
    uiConfig: {
      boardTitle: 'Faraz BullMQ Board',
    },
  },
});

export default serverAdapter;
