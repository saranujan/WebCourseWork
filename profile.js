document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("start-button").addEventListener("click", showPersonalDetailsPrompt);
    document.getElementById("volunteering-next-button").addEventListener("click", validateAndShowQualificationForm);
    document.getElementById("donation-next-button").addEventListener("click", validateAndShowAvailabilityForm);
});

// Total number of steps
const totalSteps = 4;

// Current step
let currentStep = 0;

function showPersonalDetailsPrompt() {
    const name = prompt("Enter your name:");
    const address = prompt("Enter your address:");
    const age = prompt("Enter your age:");
    const gender = prompt("Enter your gender(M/F):");

    // Update displayed information
    document.getElementById("name").textContent = name;
    document.getElementById("address").textContent = address;
    document.getElementById("age").textContent = age;
    document.getElementById("gender").textContent = gender;

    // Show personal details section
    document.getElementById("personal-details").style.display = "block";

    // Update progress
    currentStep++;
    updateProgress();
}

function validateAndShowExperienceForm() {
    // You can add validation logic here if needed
    // For simplicity, assuming all fields are filled
    document.getElementById("volunteering-experience").style.display = "block";
    showVolunteeringExperiencePrompt();
}

function showVolunteeringExperiencePrompt() {
    const task = prompt("Enter your volunteering task:");
    const experience = prompt("Enter your experience (Years):");
    const specification = prompt("Enter your volunteering specification:");

    // Update displayed information
    document.getElementById("task").textContent = task;
    document.getElementById("experience").textContent = experience;
    document.getElementById("specification").textContent = specification;

    // Show volunteering experience section
    document.getElementById("volunteering-experience").style.display = "block";

    // Update progress
    currentStep++;
    updateProgress();
}

function validateAndShowQualificationForm() {
    // You can add validation logic here if needed
    // For simplicity, assuming all fields are filled
    document.getElementById("donation").style.display = "block";
    showQualificationPrompt();
}

function showQualificationPrompt() {
    const bloodgroup = prompt("Enter your blood group:");
    const times = prompt("How many times you did blood donation:");
    const whight = prompt("Enter your whight:");

    // Update displayed information
    document.getElementById("bloodgroup").textContent =  bloodgroup;
    document.getElementById("times").textContent = times;
    document.getElementById("whight").textContent = whight;

    // Show qualification section
    document.getElementById("donation").style.display = "block";

    // Update progress
    currentStep++;
    updateProgress();
}

function validateAndShowAvailabilityForm() {
    // You can add validation logic here if needed
    // For simplicity, assuming all fields are filled
    document.getElementById("availability").style.display = "block";
    showAvailabilityPrompt();
}

function showAvailabilityPrompt() {
    const contactnumber = prompt("Enter your contact number:");
    const availabilityemail = prompt("Enter your email:");

    // Update displayed information
    document.getElementById("contactnumber").textContent =  contactnumber;
    document.getElementById("availabilityemail").textContent = availabilityemail;

    // Show availability section
    document.getElementById("availability").style.display = "block";

    // Update progress
    currentStep++;
    updateProgress();
}

function updateProgress() {
    const progress = (currentStep / totalSteps) * 100; // Calculate progress percentage
    document.getElementById("progress-bar").style.width = `${progress}%`; // Update progress bar width
    document.getElementById("progress-text").textContent = `${progress}% Complete`; // Update progress text
}
