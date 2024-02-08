let nextPath;
function checkReferrer() {
    let referrerPath = document.referrer != "" ? new URL(document.referrer).pathname : "";
    let currPath = new URL(window.location.href).pathname;
    let currInt = document.referrer != "" ? parseInt(currPath.charAt(2)) : "";
    let expectedReferrerPath = "/h" + (currInt-1) + ".html";
    nextPath = "h" + (currInt+1) + ".html";
    // Check if the referrer is not empty and pathname is the expected URL pathname
    if ((referrerPath == "") || (referrerPath != expectedReferrerPath)) {
            window.location.href = "h1.html";
    }
} checkReferrer();