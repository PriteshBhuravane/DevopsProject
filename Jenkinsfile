pipeline {
  agent any

  tools {
    nodejs 'nodeHome' // Node.js installation name in Jenkins
  }

  environment {
    PORT = '3000'
  }

  stages {
    stage('Clone') {
      steps {
        git url: 'https://github.com/PriteshBhuravane/DevopsProject.git', branch: 'master'
      }
    }

    stage('Install Dependencies') {
      steps {
        sh 'npm install'
      }
    }

    stage('Run App') {
      steps {
        sh 'node index.js'
      }
    }
  }

  triggers {
    pollSCM('* * * * *')  // Poll GitHub every 1 minute
  }
}
