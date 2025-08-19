# Simple Authentication with Wordpress

A web application built using headless Wordpress, React and MUI templates. It utilizes the plugin Simple Jwt Login for authentication.

## Features

- User authentication (register, login, logout)
- Guard authenticated routes
- Redirect users to the appropriate page based on their authentication
- Docker support for consistent environments

## Tech Stack

- **Node.js** - Runtime environment (v20.19.4)
- **React** - Frontend framework
- **Material UI** - UI library 
- **Wordpress** - Backend CMS
- **Simple Jwt Login** - Webpress plugin for JWT authentication
- **Docker** - Containerization

## Installation and Setup

```bash
# Install dependencies
yarn install

# Run React
yarn dev
```

```bash
# Running docker
docker compose up -d
```

### Setting up Simple JWT Login

1. Get the plugin and activate it
2. Under General settings, make sure Header is the only one "on". Input a decryption key.
3. Under Login settings, ensure it is log in by email and email is the JWT parameter key
4. Under Register User, allow it.
5. Under Authentication, allow it. For the payload parameters, make sure email is selected because it is the JWT parameter key that the authentication will be based on.
6. Under Auth Codes, the Authentication Key must be eqwal to AUTH_CODES in src/api/constants.ts file
7. Under CORS, enable everything.

## Note

Routes are defined in src/api/constants.ts file

## CORS error

If you are experiencing CORS error, go to the apache.conf file and uncomment all the lines. Then restart the wordpress container.

## References
[Simple JWT Login Tutorial (Wordpress)](https://www.youtube.com/watch?v=lxc0CV45cTY)
[Simple JWT Login Docs](https://simplejwtlogin.com/docs)
