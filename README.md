# node-hello-world with docker and kubernetes deployment

Nodejs, Docker, Kubernetes

## Kubernetes

### Docker Image
- Docker image [node-hello-world](https://hub.docker.com/r/imtiazmasrur/node-hello-world)
- Pull the image `docker pull imtiazmasrur/node-hello-world`

### Docker Authorization on Kubernetes
- Authorize your Docker account [DockerHub](https://hub.docker.com) `kubectl create secret docker-registry regcred --docker-username=<your-name> --docker-password=<your-pword> --docker-email=<your-email> -n <your-namespace>`

### Create Namespace on Kubernetes
- Create a namespace `kubectl create namespace developers-space`
- OR
- Run `kubectl apply -f namespace.yml`
- To see all namespace `kubectl get namespace`

### Create Deployment on Kubernetes
- To see default namespace (everything) `kubectl get all`
- OR
- To see all namespace (everything) `kubectl get all -A`
- OR
- To see all your named namespace (everything) `kubectl get all -n developers-space`
- After any update apply on deployment.yaml file `kubectl apply -f deployment.yaml`

### Create Secret on Kubernetes
- N.B. - Secret must be created before `Deployment`
- To create base64 password `echo -n 'password' | base64` // Output: `bXlfZGF0YWJhc2U=`
- To apply secret `kubectl apply -f secret.yaml`

### Pod Debugging commands on Kubernetes
- To see your namespace's pods `kubectl get pods -n developers-space`
- Get pod info (pod name - `"node-hello-world-6f455d9c5c-758fs"`) `kubectl describe pod node-hello-world-6f455d9c5c-758fs -n developers-space`
- Further details of pods (Ex. - details with ip) - `kubectl get pod -o wide -n developers-space`
- To see the logs/consoles of pod (pod name - `"node-hello-world-6f455d9c5c-758fs"`) `kubectl logs node-hello-world-6f455d9c5c-758fs -n developers-space`
- Enter pod console (pod name - `"node-hello-world-6f455d9c5c-758fs"`) `kubectl exec -it node-hello-world-6f455d9c5c-758fs -n developers-space sh`

### Deployment Debugging Commands on Kubernetes
- Create deployment from [DockerHub](https://hub.docker.com) (image name - `"nginx"`) `kubectl create deployment nginx-deployment --image=nginx -n developers-space`
- To edit deployments (deployment name - `"node-hello-world"`) `kubectl edit deployment node-hello-world -n developers-space`
- Delete deployment (deployment name - `"node-hello-world"`) `kubectl delete deployment node-hello-world -n developers-space`
- OR
- Delete deployment with filename `kubectl delete -f deployment.yaml -n developers-space`
- Get deployment details `kubectl get deployment node-hello-world -o yaml -n developers-space`
- If you need the deployment details output to a file `kubectl get deployment node-hello-world -o yaml -n developers-space > node-hello-world-deployment.yaml`

### Service Debugging Commands on Kubernetes
- Get service info (service name - `"node-hello-world"`) `kubectl describe service node-hello-world -n developers-space`
