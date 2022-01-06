import express from "express";
import consul from 'consul';
import os from 'os';

const app = express();

const port = 3000;

const consulClient = consul({ host: 'consul' });

consulClient.agent.service.register({
  name: 'api',
  address: os.networkInterfaces()['eth0'][0].address,
  port,
  connect: {
    sidecarService: {
      address: os.networkInterfaces()['eth0'][0].address,
      port: 3001,
      checks: [
        {
          name: 'Connect Sidecar Listening',
          tcp: os.networkInterfaces()['eth0'][0].address + ':3001',
          interval: '10s'
        }
      ],
      proxy: {
        destinationServiceName: 'api'
      }
    }
  }
}, err => {
  if (err) {
    console.log(err)
  }
});

app.get('/', (req, res) => {
  res.send('Hello world!');
})

app.listen(port, () => {
  console.log('listening at port ' + port);
})