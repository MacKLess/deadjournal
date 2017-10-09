var Entry = require('./../js/deadjournal.js').entryModule;

$(document).ready(function() {
  ('#deadjournal-form').submit(function(event) {
    event.preventDefault();
    var title = $('#title').val();
    var body = $('#body').val();
    $('#entry-title').append(title);
    $('#entry-body').append(body);
  });

});
