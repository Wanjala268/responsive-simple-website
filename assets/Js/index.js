
// JavaScript to Show Specific Sections
const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("section");

navLinks.forEach(link => {
    link.addEventListener("click", function(e){
        e.preventDefault();

        sections.forEach(section => {
            section.style.display = "none";
        })

        const targetsection = document.getElementById(this.dataset.section);
        targetsection.style.display = "block";
    })
})

// for navigation purposes
function showSidebar(){
    const showSidebar = document.querySelector(".sidebar");
    showSidebar.style.display = "block";
}

function hideSidebar(){
    const hideSidebar = document.querySelector(".sidebar");
    hideSidebar.style.display = "none";
}