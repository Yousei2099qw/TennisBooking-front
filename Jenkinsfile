pipeline {
    agent any

    stages {

        stage('Install Dependencies') {
            steps {
                echo '📦 Installing dependencies...'
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                echo '🏗️ Building React app (TypeScript)...'
                sh 'npm run build'
            }
        }

        stage('Test') {
            when {
                expression {
                    return fileExists('src')
                }
            }
            steps {
                echo '🧪 Running tests...'
                sh 'npm test -- --watch=false'
            }
        }
    }

    post {
        success {
            echo '✅ Build & test Success'
        }
        failure {
            echo '❌ Build 或 Test Fail'
        }
    }
}
