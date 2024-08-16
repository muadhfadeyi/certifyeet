// document.addEventListener('DOMContentLoaded', function() {
//     var dropdownBtn = document.querySelector('.dropdown-btn');
//     var dropdownContent = document.querySelector('.dropdown-content');
    
//     // Toggle the dropdown content when the button is clicked
//     dropdownBtn.addEventListener('click', function() {
//         dropdownContent.classList.toggle('show');
//     });

//     // Close the dropdown if the user clicks outside of it
//     window.addEventListener('click', function(event) {
//         if (!event.target.matches('.dropdown-btn')) {
//             if (dropdownContent.classList.contains('show')) {
//                 dropdownContent.classList.remove('show');
//             }
//         }
//     });

//     // Handle option selection
//     dropdownContent.addEventListener('click', function(event) {
//         if (event.target.tagName === 'A') {
//             dropdownBtn.textContent = event.target.textContent; // Set button text to selected option
//             dropdownContent.classList.remove('show'); // Hide dropdown content
//         }
//     });
// });