const kue = require('kue');

const que = kue.createQueue({name: 'push_notification_code'});

const job_data = {
    phoneNumber: '08069227949',
    message: 'Congratulations! You are hired',
  };

const job = que.create('push_notification_code', job_data);
job.on('enqueue', () => {
    console.log(`Notification job created: ${job.id}`)
}).on('complete', () => {
    console.log('Notification job completed')
}).on('failed attempt', () => {
    console.log(`Notification job failed`)
});

job.save();
