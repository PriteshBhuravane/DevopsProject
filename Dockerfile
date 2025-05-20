# Use official Node.js image as the base
FROM node:18

# Set the working directory
WORKDIR /app

# Copy project files into the container
COPY . .

# Install dependencies
RUN npm install

# Expose the port your app runs on
EXPOSE 3002

# Start the application
CMD ["node", "index.js"]
