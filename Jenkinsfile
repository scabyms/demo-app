pipeline {
  agent {
    demo-ci-jenkins-slave
  }
  stages {
    stage('SCM') {
      steps {
        git credentialsId: 'github', url: 'https://github.com/scaforos/demo-app'
      }
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
