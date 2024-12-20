const kue = require('kue');

const que = kue.createQueue({name: 'push_notification_code_2'});

const jobs = [
    {
      phoneNumber: '4153518780',
      message: 'This is the code 1234 to verify your account'
    },
    {
      phoneNumber: '4153518781',
      message: 'This is the code 4562 to verify your account'
    },
    {
      phoneNumber: '4153518743',
      message: 'This is the code 4321 to verify your account'
    },
    {
      phoneNumber: '4153538781',
      message: 'This is the code 4562 to verify your account'
    },
    {
      phoneNumber: '4153118782',
      message: 'This is the code 4321 to verify your account'
    },
    {
      phoneNumber: '4153718781',
      message: 'This is the code 4562 to verify your account'
    },
    {
      phoneNumber: '4159518782',
      message: 'This is the code 4321 to verify your account'
    },
    {
      phoneNumber: '4158718781',
      message: 'This is the code 4562 to verify your account'
    },
    {
      phoneNumber: '4153818782',
      message: 'This is the code 4321 to verify your account'
    },
    {
      phoneNumber: '4154318781',
      message: 'This is the code 4562 to verify your account'
    },
    {
      phoneNumber: '4151218782',
      message: 'This is the code 4321 to verify your account'
    }
  ];

  for (let job_data of jobs) {
    const job = que.create('push_notification_code_2', job_data);
    job.on('enqueue', () => {
        console.log(`Notification job created: ${job.id}`)
    }).on('complete', () => {
        console.log(`Notification job ${job.id} completed`)
    }).on('failed', (errorMessage) => {
        console.log(`Notification job ${job.id} failed: ${errorMessage}`)
    }).on('progress', (progress, _data) => {
        console.log(`Notification job ${job.id} ${progress}% complete`)
    });

    job.save();
  }