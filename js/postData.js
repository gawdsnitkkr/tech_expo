function postToGoogle() {
	var name = $('#Name').val(),
        email = $('#Email').val(),
        college = $('#College').val(),
        mno = $('#Mno').val(),
        projectName = $('#ProjectName').val(),
        projectDescription = $('#ProjectDescription').val();

    console.log(name + ' ' + email +  ' ' + college + ' ' + mno + ' ' + projectName + ' ' + projectDescription);
	var submitButton = $('#submitButton');
	submitButton.val('Submitting...');
    $.ajax({
        url: "https://docs.google.com/forms/d/1p-Tv-xkOCMuBs3psZi03JgFPqyz5Ul8vmi0zzkyo7Uw/formResponse",
		data: {
					"entry.2023644752" : name, 
					"emailAddress" : email, 
					"entry.130097223" : college, 
					"entry.1141605460" : mno, 
					"entry.1554805395" : projectName,
					"entry.1450721504" : projectDescription
		      },
        type: "POST",
        dataType: "xml",
        statusCode: {
                        0: function() {
                             window.location.replace("thankYou.html");
                        },
                        200: function() {
                            window.location.replace("thankYou.html");
                        },
                    }
        });
}