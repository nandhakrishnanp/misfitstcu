
    document.getElementById("myLink").addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default behavior of the link
        var link = event.target;
        link.classList.add("clicked");
    });





