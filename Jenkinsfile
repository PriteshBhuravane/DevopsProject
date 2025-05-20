pipeline {
  agent any

  tools {
    nodejs 'nodeHome'
  }

  environment {
    PORT = '3000'
  }

  stages {
    stage('Clone from GitHub') {
      steps {
        git credentialsId: 'github-token', url: 'https://github.com/PriteshBhuravane/DevopsProject.git', branch: 'master'
      }
    }

    stage('Install Dependencies') {
      steps {
        sh 'npm install'
      }
    }

    stage('Start Application') {
  steps {
    sh 'npm install pm2' // remove -g
    sh './node_modules/.bin/pm2 delete all || true'
    sh './node_modules/.bin/pm2 start index.js --name node-app'
  }
}

  }

  triggers {
    githubPush()  // works with GitHub webhook
  }
}
