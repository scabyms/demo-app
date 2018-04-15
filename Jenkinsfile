pipeline {
  agent any
  stages {
    stage('SCM') {
      steps {
        git credentialsId: 'github', url: 'https://github.com/scaforos/demo-app'
      }
    }
    stage('Static Analysis') {
      steps {
         echo 'Static Analysis'
         script {
              def scannerHome = tool 'SonarQube Scanner 2.8';
              withSonarQubeEnv('My SonarQube Server') {
                sh "${scannerHome}/bin/sonar-scanner"
            }
         }
       }
    }
    stage('Unit Test') {
      steps {
        echo "Unit Test"
        sh 'ps'
      }
    }
    stage('Deployment') {
      steps {
        echo "deployment"
        sh 'pwd'
      }
    }
    stage('API Test') {
      steps {
        echo "API Test"
      }
      post {
        always {
          echo "Finish Test"
        }
      }
    }
    stage('GUI Test') {
      steps {
        echo "GUI Test"
      }
      post {
        always {
          echo "Finish Test"
        }
      }
    }
  }
}
