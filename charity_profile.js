// Show the volunteer form when the "Volunteer Now" button is clicked
document.getElementById("show-form").addEventListener("click", function () {
    document.getElementById("volunteer-form").style.display = "block";
    this.style.display = "none"; // Hide the button after clicking
});

// Fetch random user data from the Random User API
function fetchRandomVolunteer() {
    fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => {
            const user = data.results[0];
            const userDiv = document.getElementById('random-user');

            userDiv.innerHTML = `
                <img src="${user.picture.medium}" alt="Volunteer Picture">
                <p><strong>Name:</strong> ${user.name.first} ${user.name.last}</p>
                <p><strong>Location:</strong> ${user.location.city}, ${user.location.country}</p>
                <p><strong>Email:</strong> ${user.email}</p>
            `;
        })
        .catch(error => {
            console.error("Error fetching random user:", error);
        });
}

// Run this function when the page loads
window.onload = fetchRandomVolunteer;