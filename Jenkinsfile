pipeline {
  agent any

  tools {
    nodejs 'nodeHome' // Make sure you configured this under Global Tools in Jenkins
  }

  environment {
    PORT = '3002' // Host port Jenkins will map to
  }

  stages {
    stage('Clone Repository') {
      steps {
        git url: 'https://github.com/PriteshBhuravane/DevopsProject.git', branch: 'master'
      }
    }

    stage('Build Docker Image') {
      steps {
        echo '🐳 Building Docker image...'
        sh 'docker build -t node-docker-app .'
      }
    }

    stage('Run Docker Container') {
      steps {
        echo '🚫 Stopping old container if it exists...'
        sh 'docker rm -f node-docker-app || true'

        echo '🔥 Freeing port 3002 if in use...'
        sh 'fuser -k 3002/tcp || true'

        echo '🚀 Running Docker container...'
        sh 'docker run -d --name node-docker-app -p 3002:3000 node-docker-app'

        echo '✅ Server is running inside Docker container at: http://localhost:3002'
      }
    }
  }

  triggers {
    pollSCM('* * * * *') // Poll every minute for GitHub changes
  }
}
