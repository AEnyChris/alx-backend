const kue = require('kue');

const que = kue.createQueue();

const blackListePhoneNumbers = ['4153518780', '4153518781'];


const sendNotification = (phoneNumber, message, job, done) => {
    let total = 2, completed = 0;

    const interval = setInterval(() => {
        // Report job progress
        if (completed <= 1){
          job.progress(completed, total);
        };

        // Check phone number if blacklisted
        if (blackListePhoneNumbers.includes(phoneNumber)){
            done(new Error(`Phone number ${phoneNumber} is blacklisted`));
            clearInterval(interval);
            return;
        };

        // log to the console at commencement of job processing
        if (completed === 0) {
          console.log(`Sending notification to ${phoneNumber}, with message: ${message}`)
        }

        completed++; // incerement completed

        // end job processing
        if (completed === total) {
            done();
            clearInterval(interval);
        }
    }, 1000);
};


que.process('push_notification_code_2', 2, (job, done) => {
  sendNotification(job.data.phoneNumber, job.data.message, job, done);
});


