const express = require('express');
const app = express();

app.use('/users', (req, res, next) => {
    console.log("'/users' was requested.");
    res.send(listOfUsersInHTML());
});

app.use('/', (req, res, next) => {
    console.log("'/' was requested.");
    res.send('<h1>it works!</h1>');
});

app.listen(3000);

function listOfUsersInHTML() {
    let html = "";

    html += "<ul>";
    html += "    <li>User 1</li>"
    html += "    <li>User 2</li>"
    html += "    <li>User 3</li>"
    html += "</ul>";

    return html;
}