function updateTitle() {
    var title = "Tomer Szulsztein";

    if (window.location.hash === "#home") {
        title = "Tomer Szulsztein - Home";
    } else if (window.location.hash === "#cs") {
        title = "Tomer Szulsztein - Computer Science";
    } else if (window.location.hash === "#video") {
        title = "Tomer Szulsztein - Videography";
    }

    document.title = title;
}

const navLinks = document.querySelectorAll("nav ul li a");
const sections = document.querySelectorAll("section");
function toggleSection(sectionId) {
    sections.forEach(function (section) {
        if (section.id===sectionId) {
            section.style.display = "block";
        } else {
            section.style.display = "none";
        }
    updateTitle();
    });
}

navLinks.forEach(function (navLink) {
    navLink.addEventListener("click", function(event) {
        event.preventDefault();
        const sectionId = this.getAttribute("href").substring(1);
        toggleSection(sectionId);
    });
});