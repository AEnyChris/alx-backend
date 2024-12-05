const createPushNotificationsJobs = (jobs, que) => {
  if(!Array.isArray(jobs)) throw new Error('Jobs is not an array');

  for (let job_data of jobs) {
    const job = que.create('push_notification_code_3', job_data);
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
  };
};

module.exports = createPushNotificationsJobs;