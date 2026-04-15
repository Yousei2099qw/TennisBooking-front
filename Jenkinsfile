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
    }

    post {
        success {
            echo '✅ Build 成功（无测试阶段）'
        }
        failure {
            echo '❌ Build 失败'
        }
    }
}
