const kue = require('kue');

const que = kue.createQueue();

const sendNotification = (phoneNumber, message, done) => {
  console.log(`Sending notification to ${phoneNumber}, with message: ${message}`);
  done();
};

que.process('push_notification_code', (job, done) => {
    sendNotification(job.data.phoneNumber, job.data.message, done)
});
