# Node.js CI/CD Pipeline – Elevate Labs Internship

## Project Overview
A Node.js web application with an automated CI/CD pipeline using GitHub Actions and Docker.

## Technologies Used
- Node.js
- Express.js
- HTML, CSS, JavaScript
- Docker
- Docker Hub
- GitHub Actions

## Features
- Responsive web dashboard
- REST API health check
- Automated application testing
- Docker containerization
- Automated Docker image publishing

## CI/CD Workflow
1. Developer pushes code to GitHub.
2. GitHub Actions checks out the repository.
3. Node.js dependencies are installed.
4. Automated tests are executed.
5. Docker image is built.
6. Docker image is pushed to Docker Hub.

## Run Locally

```bash
npm install
npm start
```

Open: http://localhost:3000

## Run Tests

```bash
npm test
```

## Run Using Docker

```bash
docker build -t nodejs-demo-app:v1 .
docker run -d -p 3000:3000 nodejs-demo-app:v1
```

## Docker Hub

Image: `yesh1520/nodejs-demo-app`

## GitHub Actions
Workflow file: `.github/workflows/main.yml`

The pipeline automatically runs tests and builds and pushes Docker images whenever code is pushed to the `main` branch.

## Internship
Elevate Labs – Task 1: Automate Code Deployment Using CI/CD Pipeline.
