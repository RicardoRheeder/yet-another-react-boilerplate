import $ from 'jquery';
import template from './template.html';


$(function () {
  // Load the basic page template 
  $('#root').html(template);

  $('#add-task').click((event) => {

    event.preventDefault();
    // Get the input element
    let inputElement = $("#current-task");
    // Add the text as a list element
    $("#todo-list-container").append('<li>' + inputElement.val() + '</li>');
    // Clear the input element
    inputElement.val('');
  });


})