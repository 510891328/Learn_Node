const http = require('http')
const { report } = require('process')

const server = http.createServer((req, res) => {
    const url = req.url
    const method = req.method

    if( url === '/'){
        res.write("<html>")
        res.write("<title>First Practice</title>")
        res.write("<body>")
        res.write("<form action='/user' method='POST'>")
        res.write("<input type='text' name='username'>")
        res.write("<button type='submit'>Submit</button>")
        res.write("</form>")
        res.write("</body>")
        res.write("</html>")
        res.end();
    }

    if( url === '/user' && method === 'POST'){
        const body = []
        req.on('data', chunk => {
            body.push(chunk);
        })

        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            res.write(`Hi, ${message}`)
            return res.end();
        })
    }
})

server.listen(8080);