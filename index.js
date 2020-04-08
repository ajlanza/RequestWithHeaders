'use strict';

$(".handleForm").submit(function(event) {
    event.preventDefault();
    let myHandle = document.getElementById("handle").value;
    console.log(myHandle);
    getRepos(myHandle);
});

function getRepos(searchHandle) {
    let url = `https://api.github.com/users/${searchHandle}/repos`;
    console.log(url);
    fetch(url)
      .then(response => response.json())
      .then(responseJson => 
        showRepos(responseJson));
}

function showRepos(responseJson) {
    // Clear old results
    document.getElementById("results").innerHTML = "";
    // Display new results
    $("p.results").append(`<h3>Here are the repos for the requested handle:</h3>`)
    responseJson.forEach(result => 
        //console.log(result.name));
        $("p.results").append(`<p><a href="${result.html_url}">${result.name}</a></p>`));
        $("p.hidden").toggleClass("hidden");
}