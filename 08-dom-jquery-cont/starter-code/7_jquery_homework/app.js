/*
Create a customizable survey form.
A user should be able to type a survey question in a text box.
When the user adds the question to the survey, it should be automatically numbered and a text box should be added below it.
The form includes 2 sample questions as illustrations.
Each survey question should also include a "Remove question" button that a user can click to remove the question from the survey.

Your final code should do the following:
- Convert the existing code to use implicit iteration
- Implement at least one example of event delegation
- Chain at least 2 methods

Note: This project uses Bootstrap, which is a CSS framework that provides prebuilt styles using class names.
Make sure the new questions you add to the survey use the same class names as in the sample form questions to take advantage of Bootstrap styles.
*/


$("#surveyList li").each(function() {
    var $removeButton = $('<button>').html("Remove question");
    $(this).append($removeButton);
});