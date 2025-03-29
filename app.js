const routes = {
    "/": "home.html",
    "/about": "about.html"
};

function route(event, page) {
    event.preventDefault();
    window.history.pushState({}, "", page === "home" ? "/" : "/" + page);
    loadContent(routes[window.location.pathname]);
}

function loadContent(page) {
    fetch(page)
        .then(response => response.text())
        .then(html => {
            document.getElementById("content").innerHTML = html;
        })
        .catch(() => document.getElementById("content").innerHTML = "<h2>Page not found</h2>");
}

window.onpopstate = () => loadContent(routes[window.location.pathname]);

document.addEventListener("DOMContentLoaded", () => {
    loadContent(routes[window.location.pathname]);
});
