Forum-App Microservices Application
This is a simple forum microservices application built with Node.js, Express, and TypeScript. The application is divided into multiple services (threads, replies, users), and all services are routed through an API Gateway.

**Table of Contents**
  - Overview
  - Technologies Used
  - Project Structure
  - Installation
  - Running the Services
  - API Gateway Setup
  - Service Descriptions
  - Contributing
  - License
    
**Overview**
This application demonstrates a simple microservices architecture where different services handle various parts of a forum application. 
The API Gateway acts as the entry point for all requests, directing them to the appropriate service.

**Technologies Used**
  - Node.js
  - Express
  - TypeScript
  - Nodemon for development server
  - http-proxy-middleware for API Gateway
  - pnpm for package management
    
**Project Structure**
forum-microservices/
│
├── api-gateway/
│   └── src/
│       └── main.ts
│
├── threads/
│   └── src/
│       └── main.ts
│
├── replies/
│   └── src/
│       └── main.ts
│
└── users/
    └── src/
        └── main.ts
        
**Installation**
- Clone the repository:
git clone https://github.com/username/forum-microservices.git
cd forum-microservices
- Install dependencies in each service:
cd api-gateway && pnpm install
cd ../threads && pnpm install
cd ../replies && pnpm install
cd ../users && pnpm install

**Running the Services**
- Start the Threads service:
cd threads
pnpm dev

- Start the Replies service:
cd replies
pnpm dev

- Start the Users service:
cd users
pnpm dev

-Start the API Gateway:
cd api-gateway
pnpm dev

**API Gateway Setup**
The API Gateway is set up to route requests to the individual services. Here are the routes:
/users → routed to localhost:3000
/threads → routed to localhost:3001
/replies → routed to localhost:3002
All services are only accessible through the API Gateway on port 8010.

**Service Descriptions**
Users Service
Port: 8000
Description: Handles user-related functionalities such as retrieving user data.
Threads Service
Port: 8001
Description: Manages thread creation and retrieval for the forum.
Replies Service
Port: 8002
Description: Handles replies to threads within the forum.
Contributing
Contributions are welcome! Please open an issue or submit a pull request with your changes.

License
This project is licensed under the MIT License.
