pipeline {
    agent any

    tools {
        nodejs 'node'   // Jenkins 里需要先配置 NodeJS
    }

    stages {
        stage('Checkout') {
            steps {
                echo '📥 Checkout code'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Test') {
            steps {
                sh 'npm test -- --watch=false'
            }
        }
    }
}
``
