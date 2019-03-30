const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    //2) Handle two Routes: "/" and "/users"
    res.setHeader('Content-Type', 'text/html');
    if (url == "/") {
        //2.1) Return some greeting text on "/"
        printHeader(res);
        res.write("some text here because you request '/'");
        //3) Add a form with a 'username' <input> to the '/' page and submit
        res.write("<br />");
        res.write("<form method='POST' action='/create-user'>");
        res.write("<input id='username' name='username'></input>");
        res.write("<input type='submit'></input>");
        res.write("</form>");

        printTail(res);
        
        return res.end();
    } else if (url == "/users") {
        //2.2) Return a list of dummy users (e.g. <ul><lu>User 1</li></ul>)
        printHeader(req);
        res.write("<ul>");
        printHtmlLI("User 1");
        printHtmlLI("User 2");
        printHtmlLI("User 3");
        res.write("</ul>");
        printHeader(res);

        return res.end();
    } else if (url == "/create-user" && method == "POST") {
        //4) Add /create-user route and parse the incoming data
        const bodyChunk = [];
        req.on('data', chunk => {
            bodyChunk.push(chunk);
        });

        return req.on('end', () => {
            const body = Buffer.concat(bodyChunk).toString();
            const message = body.split('=')[1];
            console.log(message);
            return res.end();
        });
    };
};

function printHeader(res) {
    res.write("<html>");
    res.write("<head><title>Input something</title></head>");
    res.write("<body>");
}

function printTail(res) {
    res.write("</body>")
    res.write("</html>")
}

function printHtmlLI(res, li) {
    res.write("<li>")
    res.write(li);
    res.write("</li>")
}



exports.handler = requestHandler;