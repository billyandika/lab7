'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$('.project a').click(function(e) {
		e.preventDefault();

		var projectID = $(this).closest('.project').attr('id');
		var idNumber = projectID.substr('project'.length);

		var url_call = '/project/'+idNumber;

		function addProjectDetails(project_json) {

			// compose the HTML
			var new_html =
				'<div class="project-date">'+'Customer ID: '+project_json['date']+'</div>'+
				'<div class="project-summary">'+project_json['summary']+'</div>';

			var details_div = $('#project' + idNumber + ' .details');
			details_div.html(new_html);
		}

		// issue the GET request
		$.get(url_call, addProjectDetails);
	});
}

