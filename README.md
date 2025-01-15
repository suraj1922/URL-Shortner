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

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/url-shortener.git
   cd url-shortener
