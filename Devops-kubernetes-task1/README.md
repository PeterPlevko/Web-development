# Task 1
## Your task is to create a repo in github and solve below problem
1. Create a kubernetes deployment, svc, hpa, pdb service account in kubernetes cluster. can be PaaS/Minikube
2. Deployment needs a secret with name API_KEY
3. Mount this secret in deployment
4. API_KEY should be a environment variables within the container when container starts inside a pod
5. API_KEY env variable is not used yet in app, but we want to see the approach

## Acceptance criteria
- You must provide your code in full with kubernetes manifests or pipelines or scripts
- You must use either public cloud(AWS, GCP, Azure) or Minikube to run the above manifests file
- You do not need to provide access to the cluster in public cloud, only the code
- Your code is clean and readable
- You must document any steps that are not automated in the README.md
- You must have dedicated service account for deployment
- You must have NodePort Type of service for application
- You must have Minimum 2 pods always up and running
- You must have only 1 pod unavailable during Rolling Update of Deployment

## Assumptions
1. Can use any open-source tools/language to solve problem
2. Create extra code if needed like infra(terraform, scripts) etc in same repo
3. Choose simple applications from internet e.g. nginx, httpd

## Bonus
1. Deployment container is scanned before getting deployed. If severity is high, pipeline should fail
2. Container in Pod, should not be running as root
3. Provide any code that you required to accomplish this task
4. You must document any steps that are not automated in the README.md

# Setup
- Install minikube
- Be inside the correct directory
- Start minikube
## It was necessary to enable metrics server for hpa
    minikube addons enable metrics-server
## Create secret
### This commands creates the secret: 
    kubectl apply -f nginx-secret.yaml
## Create service account
### This comand creates service account:
    kubectl apply -f service-account.yaml
## Create deployment
### This command creates deployment:
    kubectl apply -f nginx-deployment.yaml
## Create service
### This command creates service for my deployment:
    kubectl apply -f nginx-service.yaml
## Create hpa
### This command creates hpa for my deployment:
    kubectl apply -f nginx-hpa.yaml
## Create pdb 
### This command creates pdb for my deployment:
    kubectl apply -f nginx-pdb.yaml

# Testing
## Using following command we get the IP adress and port that enables us to reach nginx
    minikube service nginx-service --url