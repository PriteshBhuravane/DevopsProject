Collecting workspace information```markdown
# My Node.js Portfolio Application

This project is a **portfolio website** built using **Node.js**, **Express**, and **Bootstrap**. It is designed to showcase a developer's skills, projects, and contact information in a professional and visually appealing way.

## Features

- **Responsive Design**: Works seamlessly on all devices (desktop, tablet, and mobile).
- **Hero Section**: A welcoming section with a call-to-action button.
- **Projects Section**: Displays projects or services using Bootstrap cards.
- **About Section**: Highlights the developer's skills and experience.
- **Contact Section**: Includes a form for users to get in touch.
- **Dockerized**: The application is containerized for easy deployment.
- **CI/CD Pipeline**: Integrated with Jenkins for automated builds and deployments.

## Project Structure

- **index.js**: The main server file that serves the portfolio website.
- **index.html**: The HTML file containing the structure of the website.
- **style.css**: Custom CSS for styling the website.
- **Dockerfile**: Configuration for containerizing the application.
- **Jenkinsfile**: CI/CD pipeline configuration for building and deploying the app.

## How to Run the Project

### Prerequisites

- **Node.js**: Ensure Node.js is installed on your system.
- **Docker**: Install Docker for containerization.
- **Jenkins**: Set up Jenkins for CI/CD (optional).

### Steps to Run Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/PriteshBhuravane/DevopsProject.git
   cd DevopsProject
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the application:
   ```bash
   node index.js
   ```
   The server will start at `http://localhost:3000`.

### Steps to Run with Docker

1. Build the Docker image:
   ```bash
   docker build -t node-docker-app .
   ```

2. Run the Docker container:
   ```bash
   docker run -d -p 3000:3000 --name node-docker-app node-docker-app
   ```

3. Access the application at `http://localhost:3000`.

## CI/CD Pipeline

The project includes a Jenkins pipeline (Jenkinsfile) that:

1. Clones the repository.
2. Builds a Docker image.
3. Runs the Docker container.
4. Polls the GitHub repository every minute for changes.

