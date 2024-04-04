document.getElementById('questionnaireForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get uploaded images
    var image1 = document.getElementById('image1').files[0];
    var image2 = document.getElementById('image2').files[0];

    // Store uploaded image names in local storage
    localStorage.setItem("image1", image1 ? image1.name : "");
    localStorage.setItem("image2", image2 ? image2.name : "");

    // Get selected options
    var question1 = document.getElementById('question1').value;
    var question2 = document.getElementById('question2').value;

    // Store selected options in local storage
    localStorage.setItem("question1", question1);
    localStorage.setItem("question2", question2);

    // Get entered text
    var additionalInfo = document.getElementById('additionalInfo').value;

    // Store entered text in local storage
    localStorage.setItem("additionalInfo", additionalInfo);

    // Redirect to resultPage.html
    window.location.href = 'resultPage.html';
});

document.getElementById ('questionnaireForm').addEventListener('submit',
function updateResultPage() {
    // Retrieve data from local storage
    var image1Name = localStorage.getItem("image1");
    var image2Name = localStorage.getItem("image2");
    var question1 = localStorage.getItem("question1");
    var question2 = localStorage.getItem("question2");
    var additionalInfo = localStorage.getItem("additionalInfo");

    // Display data
    var resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = "<h2>Submission Results</h2>";
    resultsDiv.innerHTML += "<h3>Reference Images:</h3>";
    if (image1Name) {
        resultsDiv.innerHTML += "<p>Image 1: " + image1Name + "</p>";
    }
    if (image2Name) {
        resultsDiv.innerHTML += "<p>Image 2: " + image2Name + "</p>";
    }
    resultsDiv.innerHTML += "<h3>Commission Type:</h3>";
    resultsDiv.innerHTML += "<p>" + question1 + "</p>";
    resultsDiv.innerHTML += "<h3>Style Preference:</h3>";
    resultsDiv.innerHTML += "<p>" + question2 + "</p>";
    resultsDiv.innerHTML += "<h3>Additional Information:</h3>";
    resultsDiv.innerHTML += "<p>" + additionalInfo + "</p>";
});


