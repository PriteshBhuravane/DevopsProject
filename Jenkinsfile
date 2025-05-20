pipeline {
  agent any

  tools {
    nodejs 'nodeHome'
  }

  environment {
    PORT = '3002'
  }

  stages {
    stage('Clone') {
      steps {
        git url: 'https://github.com/PriteshBhuravane/DevopsProject.git', branch: 'master'
      }
    }

    stage('Build Docker Image') {
      steps {
        sh 'docker build -t node-docker-app .'
      }
    }

    stage('Run Docker Container') {
      steps {
        // Remove if already running
        sh 'docker rm -f node-docker-app || true'

        // Run the container
        sh 'docker run -d --name node-docker-app -p 3002:3002 node-docker-app'

        echo '✅ Server is running inside Docker container at: http://localhost:3002'
      }
    }
  }

  triggers {
    pollSCM('* * * * *') // Poll GitHub every 1 min
  }
}
