const http = import('http');

const host = 'localhost';

// либо 3000
const port = '8000';

// http://localhots:8000

const requestListener = function (red,res) {
    res.writeHead(200);
    res.end('Hello,server');
}

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Сервер запущен на http://${host}:${port}`)
});