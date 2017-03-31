var flow = require('node-flowjs');

flow.setup('expenditure-application-workflow', data => {
  if (data.email === data.applicantEmail) {
    flow.actions.mail(flow.organization.findManager(data.email).email,
    	'Ask for The Approval', './template/ask-approval.html', data);
  } else if (data.email != 'wowens@your-org.com') {
    if (data.approved) {
      flow.actions.mail(flow.organization.findManager(data.email).email,
        'Ask for The Approval', './template/ask-approval.html', data);
    } else {
      flow.actions.mail(data.applicantEmail,
        'Your Application Is Rejected', './template/reject-approval.html', data);
    }
  } else if (data.email === 'wowens@your-org.com') {
    if (data.approved) {
      flow.actions.mail(data.applicantEmail,
        'Got The Approval', './template/get-approval.html', data);
    } else {
      flow.actions.mail(data.applicantEmail,
        'Your Application Is Rejected', './template/reject-approval.html', data);
    }
  }
});
