"use strict";

// Declaring constant variables to store references to the elements
// that will be updated by your code.
const yearElement = document.getElementById("year");
const resolutionElement = document.getElementById("resolution")
const willMeetResolutionElement = document.getElementById("will-meet-resolution")
const submissionBtn = document.getElementById("submission-btn")

// Declare your variables here.

const resolution = "Live life the way YOU want to live.";

const currentYear = "2025";

let willMeetResolution = "Ask me in a couple months.";

function updateYear() {
    // write the logic
    yearElement.innerText = currentYear;

}

function updateResolution() {
    // Update this function 
    resolutionElement.innerText = resolution;

}

function updateWillMeetResolution() {
    willMeetResolutionElement.innerText = willMeetResolution;
}

function render() {
    // Finish writing this function
    updateYear();
    updateResolution();
    updateWillMeetResolution();

}

submissionBtn.addEventListener("click", function () {
    // Finish writing this function
    render();
})
