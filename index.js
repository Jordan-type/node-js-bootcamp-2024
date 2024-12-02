
const app = require("./app")
const { connectDB } = require("./config/mongodb.config") 

connectDB() 

// middlewares
// - functions that have access to the request object (req) and (res)
// - can be used to perform tasks before the request is processed by the route handler
// - modify request-response cycle - 
// - ending the request-response cycle'
// - calling the next middleware function in the stack

// types middlewares
// 1. Application level- ideal - tasks like logging, authentication, and error handling. -
// 2. Router-level - specific functionality
// 3. error handling - defined with four params (err, req, res, next)
// 4. built-in - managing sessions

// App-level example
const logRequest = (req, res, next) => {
    console.log(`Request URL: ${req.url}`)
    next()
}


// Http Headers provide additional infor about request or response

// classified 
// 1. Request headers
// - `Host` - domain name of the server - localhost
// - User-agent - identifies the client making the requet - web browser name and version
// - Accept - specifies the type of data the client can handle - application/json
// - Accept-Language - specifies the language of the client - en-US
// - Authrization - contain the credentials for authentication purposes.
// - Cookie - Contains cookies previously sent by the server with `Set-cookie`

// 2. response headers - theses are sent by the sever to theh clientin response to the above requests and contain infor 
// - `Content-Type`: Specifies the media type of the response body, such as `text/html` or `application/json`.
// - `Content-Length`: Indicates the length of the response body in bytes.
// - `Cache-Control`: Specifies caching directives to be applied by the client or intermediary caches.
// - `Set-Cookie`: Sets a cookie on the client's browser for subsequent requests.
// - `Location`: Redirects the client to a different URL.

// 3. General Headers
// - `Connection`: Specifies the type of connection to be established between the client and server.
// - `Keep-Alive`: Specifies the maximum number of requests that can be sent over a persistent
// - `Proxy-Authenticate`: Specifies the authentication scheme and parameters for the proxy server.

// 4. Entity Headers
// - `Content-Encoding`: Specifies the encoding of the response body, such as `gzip` or
// - `Content-Language`: Specifies the language of the response body.
// - `Content-Range`: Specifies the range of bytes in the response body.


// note - key-value pairs separated by a colon (:)

const options = {
    hostname: 'localhost',
    port: 5000,
    path: '/api/v1/events/all/events',
    method: 'GET',
    headers: {
        'Authorization': 'Bearer some_jwt_token',
        'Accept': 'application/json',
    }
}


const req = http.request(options, (res) => {
    console.log(`statusCode: ${res.statusCode}`)
        let data = '';
        res.on('data', (chunk) => {
            data += chunk;
        });

        res.on('end', () => {
            console.log(data);
            console.log('Headers:', res.headers);
        })
})


req.on('error', (error) => {
    console.error(error);
});

req.end();



// define the routes here too - plus create other models - like teachers, student models if possible add services, controllers and routes 


app.get("/error-test", function(req, res, next) {
    const error = new Error('some error')
    next(error)

}) 




// http://localhost:3001
// http://localhost:3001/api/v1/users/create/users - for creating a new user
// http://localhost:3001/api/v1/users/all/users - to get all users
// http://localhost:3001/api/v1/users/delete/:userId/user - param - userId




app.use(logRequest)

const PORT = process.env.PORT || 3001;
app.listen(
    PORT, () => {
        console.log(`Server is running on port ${PORT}`)
})


