Template.form.events({
  'submit form': function (event, template) {
    event.preventDefault();

    const revenue = {
      date: template.find('form [data-id=date]').value,
      amount: +template.find('form [data-id=amount]').value
    };

    Revenues.insert({
      date: revenue.date,
      amount: revenue.amount
    });

    template.find('form [data-id=date]').value = '';
    template.find('form [data-id=amount]').value = '';
  }
});
