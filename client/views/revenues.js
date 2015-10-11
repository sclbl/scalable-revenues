Template.revenues.events({
  'click [data-action=remove]': function (event, template) {
    if (confirm('Do you really want to remove this revenue?')) {
      Revenues.remove({ _id: this._id });
    }
  }
});

Template.revenues.helpers({
  revenues: () => {
    return Revenues.find({}, { sort: { date: -1 } });
  },
  revenueSum: () => {
    return Revenues.find({}).sum('amount');
  },
  currentMonth: () => {
    return moment().format("MMMM");
  },
  formattedDate: (date) => {
    return moment(date).format("L");
  },
  progressWidth: () => {
    return Revenues.find({}).sum('amount')/10000*100;
  }
});
