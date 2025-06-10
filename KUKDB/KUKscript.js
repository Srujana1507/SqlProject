// home page script
// Function to open the form
// Get the modal
var modal = document.getElementById('signUpForm');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


// JavaScript to handle form submission and validation (optional)
document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you for contacting KUK Solutions! We'll get back to you soon.");
});

// JavaScript for section visibility effect
const sections = document.querySelectorAll('.section');
const options = {
    threshold: 0.1 // Adjust as needed
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, options);

sections.forEach(section => {
    observer.observe(section);
});

// START of Courses Full page Navigation

// START of Courses Full Page Navigation
function openNav() {
    const overlay = document.getElementById("myNav");
    overlay.style.width = "100%";
}

function closeNav() {
    const overlay = document.getElementById("myNav");
    overlay.style.width = "0%";
}

// Hide the overlay on page load to prevent flashing
document.addEventListener("DOMContentLoaded", function () {
    const overlay = document.getElementById("myNav");
    if (overlay) {
        overlay.style.width = "0%"; // Ensure overlay is hidden
        overlay.style.visibility = "hidden"; // Prevent any flashing
        overlay.style.transition = "none"; // Disable transition briefly
        setTimeout(() => {
            overlay.style.transition = ""; // Re-enable transition
            overlay.style.visibility = "visible"; // Make it visible for normal use
        }, 50);
    }
});



// sidebar start here
// document.addEventListener("DOMContentLoaded", () => {
//     // Select all sidebar links
//     const links = document.querySelectorAll(".sidebar ul li a");

//     links.forEach(link => {
//         link.addEventListener("click", (event) => {
//             event.preventDefault(); // Prevent default anchor behavior

//             // Step 1: Highlight the selected link in the sidebar
//             links.forEach(l => l.classList.remove("active")); // Remove active class from all links
//             link.classList.add("active"); // Add active class to the clicked link

//             // Step 2: Center the selected link in the sidebar
//             const sidebar = document.querySelector(".sidebar");
//             const linkTop = link.offsetTop; // Position of the link
//             const sidebarHeight = sidebar.clientHeight; // Sidebar visible height
//             sidebar.scrollTop = linkTop - sidebarHeight / 2 + link.offsetHeight / 2;

//             // Step 3: Display the corresponding content
//             const topicId = link.getAttribute("data-topic");
//             const topics = document.querySelectorAll(".topic-content");
//             topics.forEach(topic => topic.classList.remove("active")); // Hide all topics

//             const selectedTopic = document.getElementById(topicId);
//             if (selectedTopic) {
//                 selectedTopic.classList.add("active"); // Show the selected topic
//             }
//         });
//     });
// });


// // Function to parse URL query parameters
//     function getQueryParam(param) {
//     const urlParams = new URLSearchParams(window.location.search);
//     return urlParams.get(param);
// }

//     // Function to activate a topic
//     function activateTopic(topicId) {
//     // Deactivate all sidebar links
//     const sidebarLinks = document.querySelectorAll('.sidebar a');
//     sidebarLinks.forEach(link => link.classList.remove('active'));

//     // Deactivate all content sections
//     const topicContents = document.querySelectorAll('.topic-content');
//     topicContents.forEach(content => content.classList.remove('active'));

//     // Activate the selected sidebar link
//     const activeLink = document.getElementById(topicId);
//     if (activeLink) {
//         activeLink.classList.add('active');
//     }

//     // Show the corresponding content section
//     const activeContent = document.querySelector(`.topic-content[data-topic="${topicId}"]`);
//     if (activeContent) {
//         activeContent.classList.add('active');
//     }
// }

//     // Function to handle sidebar initialization
//     function initializeSidebar() {
//     // Retrieve the active topic from the URL query parameter or localStorage
//     const urlTopic = getQueryParam('topic');
//     const savedTopic = localStorage.getItem('activeTopic');
//     const activeTopic = urlTopic || savedTopic;

//     if (activeTopic) {
//         activateTopic(activeTopic);
//     }

//     // Attach click event listeners to all sidebar links
//     const sidebarLinks = document.querySelectorAll('.sidebar a');
//     sidebarLinks.forEach(link => {
//         link.addEventListener('click', event => {
//             const topicId = link.id;

//             // Save the active topic in localStorage
//             localStorage.setItem('activeTopic', topicId);

//             // Allow navigation if the link is for a different page
//             if (link.getAttribute('href')?.includes('.html')) {
//                 return;
//             }

//             // Prevent default behavior for in-page links and activate the topic dynamically
//             event.preventDefault();
//             activateTopic(topicId);
//         });
//     });
// }

//     // Initialize the sidebar when the page loads
//     document.addEventListener('DOMContentLoaded', initializeSidebar);

// Function to parse URL query parameters
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Function to activate a topic
function activateTopic(topicId) {
    // Deactivate all sidebar links
    const sidebarLinks = document.querySelectorAll('.sidebar ul li a');
    sidebarLinks.forEach(link => link.classList.remove('active'));

    // Deactivate all content sections (topic-content and sidebar-content)
    const topicContents = document.querySelectorAll('.topic-content, .sidebar-content');
    topicContents.forEach(content => content.classList.remove('active'));

    // Activate the selected sidebar link
    const activeLink = document.getElementById(topicId);
    if (activeLink) {
        activeLink.classList.add('active');
        centerLinkInSidebar(activeLink); // Center the active link
    }

    // Show the corresponding content section
    const activeContent = document.querySelector(`.topic-content[data-topic="${topicId}"], .sidebar-content[data-topic="${topicId}"]`);
    if (activeContent) {
        activeContent.classList.add('active');
    }
}

// Function to center the selected link in the sidebar
function centerLinkInSidebar(link) {
    const sidebar = document.querySelector(".sidebar");
    const linkTop = link.offsetTop; // Position of the link relative to the sidebar
    const sidebarHeight = sidebar.clientHeight; // Visible height of the sidebar
    const linkHeight = link.offsetHeight; // Height of the link

    // Adjust scrollTop to center the link
    sidebar.scrollTop = linkTop - sidebarHeight / 2 + linkHeight / 2;
}

// Function to handle sidebar initialization
function initializeSidebar() {
    // Retrieve the active topic from the URL query parameter or localStorage
    const urlTopic = getQueryParam('topic');
    const savedTopic = localStorage.getItem('activeTopic');
    const activeTopic = urlTopic || savedTopic;

    if (activeTopic) {
        activateTopic(activeTopic);
    }else {
        // Fallback: Activate the first topic if none is specified
        const firstTopicLink = document.querySelector('.sidebar ul li a');
        if (firstTopicLink) {
            const firstTopicId = firstTopicLink.id;
            localStorage.setItem('activeTopic', firstTopicId); // Save to localStorage
            activateTopic(firstTopicId); // Activate the first topic
        }
    }

    // Attach click event listeners to all sidebar links
    const sidebarLinks = document.querySelectorAll('.sidebar ul li a');
    sidebarLinks.forEach(link => {
        link.addEventListener('click', event => {
            const topicId = link.id;

            // Save the active topic in localStorage
            localStorage.setItem('activeTopic', topicId);

            // If it's a cross-page navigation (href with .html), allow normal page load
            if (link.getAttribute('href')?.includes('.html')) {
                return;
            }

            // Prevent default behavior for in-page links and activate the topic dynamically
            event.preventDefault();
            activateTopic(topicId);
        });
    });
}

// Function to handle Previous/Next buttons navigation and highlight the sidebar
function initializeNavigation() {
    const navButtons = document.querySelectorAll('.topic-buttons a');
    navButtons.forEach(button => {
        button.addEventListener('click', event => {
            // Get the topic from the URL or the button's href
            const nextTopic = getQueryParam('topic') || button.getAttribute('href').split('?topic=')[1];

            if (nextTopic) {
                // Save the active topic in localStorage
                localStorage.setItem('activeTopic', nextTopic);

                // Activate the topic content and highlight the sidebar link
                activateTopic(nextTopic);

                // Allow normal page navigation if it's a cross-page link
                if (button.getAttribute('href')?.includes('.html')) {
                    return;
                }

                // Prevent the default behavior for in-page links and update the URL query parameter
                event.preventDefault();
                window.location.href = `${button.getAttribute('href')}?topic=${nextTopic}`;
            } else {
                // Allow page redirection when the href does not have a ?topic parameter
                return;
            }
        });
    });
}

// Function to initialize the page (sidebar and navigation)
function initializePage() {
    window.scrollTo(0, 0);
    // Initialize the sidebar
    initializeSidebar();

    // Initialize the Previous/Next navigation buttons
    initializeNavigation();
}

// Initialize the page when the document is ready
document.addEventListener('DOMContentLoaded', initializePage);

// sidebar end here


// JavaScript for resizable sidebar
const sidebar = document.getElementById('sidebar');
const resizer = document.getElementById('resizer');
let isResizing = false;

resizer.addEventListener('mousedown', (e) => {
    isResizing = true;
    document.body.style.cursor = 'ew-resize';
});

document.addEventListener('mousemove', (e) => {
    if (!isResizing) return;
    let newWidth = e.clientX - sidebar.offsetLeft;
    if (newWidth > 100 && newWidth < 400) { // Set min and max width limits
        sidebar.style.width = newWidth + 'px';
        document.querySelector('.content').style.marginLeft = newWidth + 'px';
    }
});

document.addEventListener('mouseup', () => {
    isResizing = false;
    document.body.style.cursor = 'default';
});
// sql page script end here

// interviewprep script start here
function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}


function openPage(pageName, elmnt, color) {
    // Hide all elements with class="tabcontent" by default */
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Remove the background color of all tablinks/buttons
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }

    // Show the specific tab content
    document.getElementById(pageName).style.display = "block";

    // Add the specific color to the button used to open the tab content
    elmnt.style.backgroundColor = color;
    document.getElementById("interview").style.display = "none";
}

// Get the element with id="defaultOpen" and click on it
// document.getElementById("defaultOpen").click();

function closePage() {
    var tabcontent = document.getElementsByClassName("tabcontent");
    for (var i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none"; // Hide all tab content
    }

    document.getElementById("interview").style.display = "flex"; // Show the main content
}

// document.getElementById("defaultOpen").click();
// Ensure the overlay is hidden on page load and redirect to the home page if #courses is in the URL
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("myNav").style.width = "0%";

    // Check if the URL contains #courses
    if (window.location.hash === "#courses") {
        // Redirect to the home section by removing the hash
        window.location.hash = ""; // This clears the #courses fragment
    }
});
// interviewprep script end here


// footer script start here
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('newsletter-form');
    const emailInput = document.getElementById('email');

    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent page reload on form submit

        if (emailInput.value.trim() !== '') {
            alert(`Thank you for subscribing with email: ${emailInput.value}`);
            emailInput.value = ''; // Clear input after successful submission
        } else {
            alert('Please enter a valid email address.');
        }
    });
});

// footer script end here


// resource page script start here
function downloadFile(fileUrl) {
    try {
        // Ensure the file URL is valid
        if (!fileUrl) {
            console.error('No file URL provided');
            return;
        }
        // Create a temporary <a> element
        const link = document.createElement('a');
        link.href = fileUrl;
        // Extract the filename from the URL or set a default name
        const fileName = fileUrl.split('/').pop() || 'downloaded_file';
        link.download = fileName;
        // Append the link to the document, trigger the download, and clean up
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } catch (error) {
        console.error('Error downloading the file:', error);
    }
}


function previewFile(fileUrl) {
    const modal = document.getElementById('modals');
    const overlay = document.getElementById('overlays');
    const modalContent = document.getElementById('modals-content');

    // Clear previous content
    modalContent.innerHTML = '';

    // File type detection
    const fileExtension = fileUrl.split('.').pop().toLowerCase();

    if (['jpg', 'jpeg', 'png', 'gif'].includes(fileExtension)) {
        // Display image
        modalContent.innerHTML = `<img src="${fileUrl}" alt="File Preview" style="width: 100%; height: auto;" />`;
    } else if (['pdf'].includes(fileExtension)) {
        // Display PDF
        modalContent.innerHTML = `<iframe src="${fileUrl}" title="PDF Preview"></iframe>`;
    } else if (['txt', 'csv', 'json', 'xml'].includes(fileExtension)) {
        // Fetch and display plain text
        fetch(fileUrl)
            .then(response => response.text())
            .then(data => {
                modalContent.innerHTML = `<pre>${data}</pre>`;
            })
            .catch(err => {
                modalContent.innerHTML = '<p>Error loading file.</p>';
            });
    } else {
        modalContent.innerHTML = '<p>Preview not available for this file type.</p>';
    }

    // Show modal
    overlay.style.display = 'block';
    modal.style.display = 'block';
}

function closeModal() {
    document.getElementById('modals').style.display = 'none';
    document.getElementById('overlays').style.display = 'none';
}
// resource page script end here


