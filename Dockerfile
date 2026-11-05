# Use Node.js 24 Alpine as the base image
FROM node:24-alpine

# Set working directory inside the container
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy application source code
COPY . .

# Application port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]