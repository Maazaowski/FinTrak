# FinTrak

FinTrak is a web application built with Node.js and React.js to manage invoices. It allows you to generate invoices, track their status (paid or pending), and view an overview of your income for each month. The application is containerized using Docker for easy deployment.

## Features

- Create and manage invoices.
- Track the status of invoices (paid or pending).
- Dashboard view for monthly income overview.
- Deployed using Docker containers.

## Tech Stack

- **Backend**: Node.js, Express.js, MongoDB
- **Frontend**: React.js
- **Containerization**: Docker, Docker Compose

## Installation

### Prerequisites

- [Docker](https://www.docker.com/)
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/fintrak.git
   cd fintrak
   ```

2. **Start the Docker containers**:
   ```bash
   docker-compose up --build
   ```

   This will build the Docker images and start the services (MongoDB, backend, and frontend).

3. **Access the application**:
   - Backend API: `http://localhost:3000`
   - Frontend UI: `http://localhost:3001`

## Development

### Backend

- Navigate to the backend directory:
  ```bash
  cd invoice-app
  ```
- Install dependencies:
  ```bash
  npm install
  ```
- Start the development server:
  ```bash
  npm start
  ```

### Frontend

- Navigate to the frontend directory:
  ```bash
  cd invoice-client
  ```
- Install dependencies:
  ```bash
  npm install
  ```
- Start the development server:
  ```bash
  npm start
  ```

## Docker

- To stop the Docker containers:
  ```bash
  docker-compose down
  ```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
