import { expect } from 'chai';
import createPushNotificationsJobs from './8-job';

const queue = require('kue').createQueue();

before(function() {
  queue.testMode.enter();
});

afterEach(function() {
  queue.testMode.clear();
});

after(function() {
  queue.testMode.exit()
});

describe('createPushNotificationsJobs', () => {
  it('throws error if jobs is not an array', () => {
    const job = 'notAnArray';
    expect(() => createPushNotificationsJobs(job, queue)).to.throw(Error, 'Jobs is not an array');
  });

  it('creates two jobs successfuly', () => {
    const jobs = [
        {phoneNumber: '0123456789', message: 'Notification message 1'},
        {phoneNumber: '9876543210', message: 'Notification message 2'}
    ]
    createPushNotificationsJobs(jobs, queue);
    expect(queue.testMode.jobs.length).to.equal(2);
  })
})
