def getServerName(String branchName) {
    switch(branchName) {
        case 'main':
            return 'deploy.warshati.ma'
        case 'develop':
            return 'deploy-develop.warshati.ma'
        case 'test':
            return 'deploy-test.warshati.ma'
        default:
            error "Unknown branch: ${branchName}"
    }
}

pipeline {
    agent any

    environment {
        SERVER_NAME = getServerName(env.BRANCH_NAME)
        NGINX_CONF_TEMPLATE = "deploy/conf.conf"
        NGINX_CONF_NAME = "${SERVER_NAME}.conf"
    }

    stages {
        stage('Checkout') {
            steps {
                echo "Current branch is: ${env.BRANCH_NAME}"
                git branch: "${env.BRANCH_NAME}", url: 'git@github.com:Pubsilon/cashier-frontend.git'
            }
        }

        stage('Prepare Nginx') {
            steps {
                script {
                    echo "Building branch: ${env.BRANCH_NAME}"
                    echo "Using server name: ${SERVER_NAME}"

                    sh """
                    sudo cp -f ${NGINX_CONF_TEMPLATE} /etc/nginx/sites-available/${NGINX_CONF_NAME}
                    sudo sed -i 's/{{SERVER_NAME}}/${SERVER_NAME}/g; s/{{PORT}}/${env.PORT}/g' /etc/nginx/sites-available/${NGINX_CONF_NAME}
                    sudo ln -sf /etc/nginx/sites-available/${NGINX_CONF_NAME} /etc/nginx/sites-enabled
                    """
                }
            }
        }

        stage('Build and Deploy') {
            steps {
                script {
                    sh "docker compose -f docker-compose.yml up -d --build --force-recreate"
                }
            }
        }

        stage('Post-Deploy') {
            steps {
                sh 'docker compose ps'
                sh 'sudo systemctl restart nginx'
            }
        }
    }

    post{
        failure {
            echo 'Pipeline failed. Services will be brought down.'
            script {
                sh "docker compose  -f docker-compose.yml down"
            }
        }

        success {
            echo 'Pipeline succeeded. Docker services are still running...'
        }
    }
}
