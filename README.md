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
```

## Note
Routes are defined in src/api/constants.ts file

## References
[Simple JWT Login Tutorial (Wordpress)](https://www.youtube.com/watch?v=lxc0CV45cTY)
[Simple JWT Login Docs](https://simplejwtlogin.com/docs)
