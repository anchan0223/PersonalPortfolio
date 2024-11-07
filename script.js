// Get all modal and project card elements (assuming you follow the same naming convention for the IDs)
const modals = document.querySelectorAll('.modal');
const projectCards = document.querySelectorAll('.project-card');
const certificationCards = document.querySelectorAll('.certification-card');
const closeBtns = document.querySelectorAll('.close');

// Function to open the modal
projectCards.forEach((projectCard, index) => {
    projectCard.addEventListener('click', function() {
        modals[index].style.display = 'block'; // Show the corresponding modal
    });
});

// Function to close the modal
closeBtns.forEach((closeBtn, index) => {
    closeBtn.addEventListener('click', function() {
        modals[index].style.display = 'none'; // Hide the corresponding modal
    });
});

// Close the modal if the user clicks outside the modal content
window.addEventListener('click', function(event) {
    modals.forEach((modal) => {
        if (event.target == modal) {
            modal.style.display = 'none'; // Hide the modal if clicked outside
        }
    });
});

