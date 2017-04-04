var flow = require('node-flowjs');

flow
.setup('expenditure-application-workflow', {
  approverId: 'wowens',
})
.mailhook({
  subject: 'expenditure-application-workflow',
  applicantIdSelector: 'table tr:first-child td:last-child',
});
