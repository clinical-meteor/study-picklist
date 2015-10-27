Meteor.startup(function () {
  Session.setDefault('show_study_picklist', false);
  Session.setDefault('selectedUserId', null);
});


Template.studyPicklistModal.events({
  'click #studyPicklistCancelButton': function (){
    Session.set('show_study_picklist', false);
    Session.set('show_reactive_overlay', false);
  },
  'change #studySearchInput': function (){
    Session.set('studySearchFilter', $('#studySearchInput').val());
  },
  'keyup #studySearchInput': function (){
    Session.set('studySearchFilter', $('#studySearchInput').val());
  },
  "click #studyPicklistOkButton": function (event, template) {
    Session.set('show_study_picklist', false);
    Session.set('show_reactive_overlay', false);
  },
  'click .studyRow': function (){
    Session.set("selectedUserId", this._id);
    Session.set("studySearchFilter", this.name);
    Session.set('show_study_picklist', false);
    Session.set('show_reactive_overlay', false);
  }
});


Template.studyPicklistModal.helpers({
  getCurrentSearchFilter: function (){
    return Session.get('studySearchFilter');
  },
  studiesList: function () {
    // return Studies.find({$or:[
    //   {
    //     _id: {
    //       $regex: Session.get('studySearchFilter'),
    //       $options: 'i'
    //     }
    //   },
    //   {
    //     'name': {
    //       $regex: Session.get('studySearchFilter'),
    //       $options: 'i'
    //     }
    //   }
    // ]});
  },
  getVisibility: function () {
    if (Session.get('show_study_picklist')) {
      return "visible";
    } else {
      return "fade";
    }
  }
});
