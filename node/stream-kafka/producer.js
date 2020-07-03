const kafka = require('kafka-node');

const client = new kafka.KafkaClient();
const producer = new kafka.Producer(client);

producer.on('ready', () => {
  console.log('producer connection established');

  setInterval(() => {
    producer.send([
      {
        topic: 'stream',
        messages: 'hola mundo',
        partition: 0,
      },
      {
        topic: 'stream2',
        messages: 'desde make it real'
      }
    ],
    (error, data) => console.log(data));
  }, 3000);
});

producer.on('error', (error) => {
  console.log(error)
});
