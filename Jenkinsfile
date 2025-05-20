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

    stage('Install Dependencies') {
      steps {
        sh 'npm install'
      }
    }

    stage('Run App') {
      steps {
        sh 'npm install pm2'
        sh './node_modules/.bin/pm2 delete all || true'
        sh './node_modules/.bin/pm2 start index.js --name node-app'
        echo '🌐 Visit your app at: http://localhost:3002'
      }
    }
  }

  triggers {
    pollSCM('* * * * *')
  }
}
