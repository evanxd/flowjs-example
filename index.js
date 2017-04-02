var flow = require('node-flowjs');

flow.setup('expenditure-application-workflow', {
  approverId:           'wowens',
  requestMailSubject:   'Request An Approval',
  requestMailContent:   './template/request.html',
  rejectionMailSubject: 'The Application Is Rejected',
  rejectionMailContent: './template/rejection.html',
  approvalMailSubject:  'Got The Approval',
  approvalMailContent:  './template/approval.html',
});

flow.mailhook({ fromEmail: 'member@your-org.com', subject: 'expenditure-application-workflow', })
    .trigger('expenditure-application-workflow', { applicantIdSelector: 'table tr:first-child td:last-child' });
