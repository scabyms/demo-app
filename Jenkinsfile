pipeline {
  agent any
  stages {
    stage('SCM') {
      git credentialsId: 'github', url: 'https://github.com/scaforos/demo-app'
    }
    stage('Static Analysis') {
      steps {
         echo 'Static Analysis'
         sh 'ls'
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
  }
}
