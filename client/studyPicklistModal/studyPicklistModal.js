Meteor.startup(function () {
  Session.setDefault('show_study_picklist', false);
  Session.setDefault('selectedUserId', null);
  Session.setDefault('selectedUserName', "");
});


Template.studyPicklistModal.events({
  "click #userPicklistOkButton": function (event, template) {
    Session.set('show_study_picklist', false);
    Session.set('show_reactive_overlay', false);
  },
  'click .userRow': function (){
    Session.set("selectedUserId", this._id);
    Session.set('selectedUserName', this.profile.fullName);
    Session.set('show_study_picklist', false);
    Session.set('show_reactive_overlay', false);
  }
});


Template.studyPicklistModal.helpers({
  studiesList: function () {
    return [];
    //return Studies.find();
  },
  getVisibility: function () {
    if (Session.get('show_study_picklist')) {
      return "visible";
    } else {
      return "fade";
    }
  }
});
