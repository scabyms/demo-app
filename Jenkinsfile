pipeline {
  agent any
  stages {
    stage('Static Analysis') {
      steps {
         echo 'Static Analysis'
         // script {
         //      def scannerHome = tool 'SonarQube Scanner 2.8';
         //      withSonarQubeEnv('My SonarQube Server') {
         //        sh "${scannerHome}/bin/sonar-scanner"
         //    }
         // }
       }
    }
    stage('Unit Test') {
      steps {
        echo "Unit Test"
        sh 'ps'
      }
    }
    stage('Deployment') {
      when {
        branch 'master'
      }
      steps {
        echo "deployment"
        // sh 'git push heroku master'
      }
    }
    stage('API Test') {
      when {
        branch 'master'
      }
      steps {
        echo "API Test"
        sh "npm install && npm run api-test"
      }
      post {
        always {
          echo "Finish API Test"
        }
      }
    }
    stage('GUI Test') {
      when {
        branch 'master'
      }
      steps {
        echo "GUI Test"
      }
      post {
        always {
          echo "Finish GUI Test"
        }
      }
    }
  }
}
