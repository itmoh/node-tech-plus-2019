
# HTTP/REST/API
https://geemus.gitbooks.io/http-api-design/content/en/index.html

Headers
passing data to server ( body, encoding type, GET/POST)
JSON/HTML/XML
GET can be cached



Method	Description	Is Idempotent
GET	Return the current value of an object.	True
PUT	Replace an object, or create a named object, when applicable.	True
DELETE	Delete an object.	True
POST	Create a new object based on the data provided, or submit a command.	False
HEAD	Return metadata of an object for a GET response. Resources which support the GET method MAY support the HEAD method as well.	True
PATCH	Apply a partial update to an object.	False
OPTIONS	Get information about a request; see below for details.	True

http://jsonapi.org

Golden Rules


Flat is better than nested.
Simple is better than complex.
Strings are better than numbers.
Consistency is better than customization.

Filtering
GET /comments?filter[post]=1,2&filter[author]=12 HTTP/1.1
Pagination
GET /articles?page[number]=3&page[size]=1 HTTP/1.1



response status codes
categories of codes
› 1xx informational › 2xx success
› 3xx redirect
› 4xx client error
› 5xx server error
most common codes
› 200 OK (request succeeded, resource is in message body)
› 404 Not Found (resource doesn’t exist)
› 303 See Other (resource moved, see location header)
› 500 Server Error (web app implementer messed up)



https://byrondover.github.io/post/restful-api-guidelines/
API Design Principles
* Build for the consumer
* Convention over configuration
* Optimize close to the metal

 A REST API is composed of four distinct resource archetypes: docroot, resource, collection, and controller.


validation on server side
Pagination
static files in db


# C R U D


# sessions/JWT
 Cookies and sessions
!  HTTP is stateless – it does not keep track of the client between requests
!  But sometimes we need to keep track of this information
	!  Shopping cart
	!  “Remember me” on login sites
!  2 solutions to this issue
	!  Cookies – small file stored client-side
	!  Sessions – relevant data stored on the server

cookie is
› name-value pair
› expiration, path & domain
server sends
› using set-cookie header
browser sends back
› all unexpired cookies › with matching path
expiration
› session cookies: on quit
› persistent cookies: on expire

Two main disadvantages of cookies
!  Limited in size by browser
!  Stored client-side " users / malicious people can change
!  Sessions store user data on the server !  Limited only by server space
!  Cannot be modified by users
!  A potential downside to sessions is that they expire when the browser is closed
!  Sessions are identified by a session id: often a small cookie! But the rest of the data is still stored on the server

session mechanism

http://www.dotnetcurry.com/nodejs/1302/nodejs-token-based-authentication-security


#redux, Работа с большим проектом. советы

# Setup nodejs
configuration node js application

https://github.com/normalize/mz   Promisification

# express
https://github.com/lorenwest/node-config


## Полезные мидлверы
https://github.com/expressjs/csurf
https://github.com/helmetjs/helmet



## Mongo/mongoose


# Debugging
https://nodejs.org/en/docs/inspector/

postman
## Domains
https://github.com/winstonjs/winston
https://github.com/petruisfan/node-supervisor


# Cluster
nodejs scaling, - nodejs scaling- pm2, nodejs working with multiple instances




# Security
run as root
eval is EVIL
callbacks
Security

Do enforce HTTPS (TLS-encrypted) across all endpoints, resources and services.

Do enforce and require HTTPS for all callback URLs, push notification endpoints and web hooks.

CORS

Do support CORS (Cross Origin Resource Sharing) headers for all public-facing APIs.

Consider supporting a CORS allowed origin of “*”, and enforcing authorization through valid OAuth tokens.

Avoid combining user credentials with origin validation.


https://retirejs.github.io/retire.js/
https://nodesecurity.io
https://blog.risingstack.com/node-js-security-checklist/
https://expressjs.com/en/advanced/best-practice-security.html
http://nodewebapps.com/2017/01/03/13-security-best-practices-for-your-web-application/



npm 5
lock files


https://github.com/azat-co/you-dont-know-node
https://github.com/brijeshbhakta30/node-express-mongoose-es7-starter
https://github.com/nVisium/goat.js/tree/master/views
http://krakenjs.com/index.html#examples

life reload

развертывание на heroky
travisCI
+ CI
