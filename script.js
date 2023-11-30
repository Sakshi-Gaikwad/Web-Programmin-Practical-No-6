
function generateGreeting() {
    var name = document.getElementById("name").value;
    var message = "Happy Diwali, " + name + "!";
    var newWindow = window.open("", "_blank", "width=600,height=400");

    // Add background image styling to the new window
    newWindow.document.write("<html><head><title>Diwali Greeting</title>");
    newWindow.document.write("<style>body { font-family: Arial, sans-serif;color:white;text-align:center;margin-top:100px; background-image: url(diwali2.jpg); background-size: cover; }</style>");
    newWindow.document.write("</head><body><h1>" + message + "</h1></body></html>");
}
