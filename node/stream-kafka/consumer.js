const kafka = require('kafka-node');

const client = new kafka.KafkaClient();
const consumer = new kafka.Consumer(
  client,
  [
    {
      topic: 'stream',
      partition: 0,
      offset: 8,
    },
    {
      topic: 'stream2',
    }
  ]
);

consumer.on('message', (message) => {
  console.log(message);
});

setTimeout(() => {
  consumer.pauseTopics(['stream'])
}, 10000);
