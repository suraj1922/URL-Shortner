# URL Shortener API

This is a simple URL Shortener API built with Express.js and MongoDB. It allows users to shorten URLs and track visits through a redirect. The API supports the following routes:

- `POST /url` - Create a new short URL.
- `GET /:shortId` - Redirect to the original URL using the short URL ID.

## Features

- Create a short URL from a long URL.
- Track visit history for each shortened URL.
- Redirect to the original URL when visiting the short URL.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose

## Installation

Follow these steps to get the project up and running locally:

 **Clone the repository:** 

   ```bash
   git clone https://github.com/yourusername/url-shortener.git
   cd url-shortener
```



##API Endpoints
POST /url
Create a new short URL.

Request Body
json
Copy code
{
  "url": "https://www.example.com"
}
Response
json
Copy code
{
  "id": "shortId"
}
shortId will be the generated short URL ID that can be used to access the original URL.
GET /:shortId
Redirect to the original URL using the short URL ID.

Example
Request: GET http://localhost:8001/sp9BBNT48

This will redirect you to the original URL associated with the shortId sp9BBNT48.

Response
Redirects to the original URL.

##Postman / Thunder Client Example
POST Request to create a short URL:
Method: POST

URL: http://localhost:8001/url

Body (JSON):

json
Copy code
{
  "url": "https://www.example.com"
}
Response:

json
Copy code
{
  "id": "shortId"
}
GET Request to visit the shortened URL:
Method: GET

URL: http://localhost:8001/{shortId} (replace {shortId} with the generated ID)

Example: http://localhost:8001/sp9BBNT48

This will redirect you to the original URL.

##Error Handling
404 Not Found: If the short URL does not exist.
400 Bad Request: If the URL is not provided in the POST request or the redirect URL is not available.

##License
This project is licensed under the MIT License - see the LICENSE file for details.

##Contributing
Feel free to fork this project, make improvements, and submit a pull request.






