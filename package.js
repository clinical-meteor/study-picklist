Package.describe({
  name: 'clinical:study-picklist',
  version: '1.0.7',
  summary: 'User Picklist modal for  ClinicalFramework apps.',
  git: 'https://github.com/clinical-meteor/clinical-study-picklist',
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.versionsFrom('1.1.0.2');

  api.use('meteor-platform');
  api.use('grove:less@0.1.1');
  api.use('awatson1978:fonts-helveticas@1.0.4');
  api.use('clinical:modals@1.0.5');

  api.addFiles('client/studyPicklistModal/studyPicklistModal.html', 'client');
  api.addFiles('client/studyPicklistModal/studyPicklistModal.js', 'client');
  api.addFiles('client/studyPicklistModal/studyPicklistModal.less', 'client');

  api.export('userPicklistModal');
});


Package.onTest(function (api) {
  api.use('tinytest');
  api.use('clinical:study-picklist');
  api.addFiles('tests/study-picklist.js');
});
