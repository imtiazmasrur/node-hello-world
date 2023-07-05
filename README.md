# node-hello-world with docker and kubernetes deployment

Nodejs, Docker, Kubernetes

## Kubernetes

### Docker Image
- Docker image [node-hello-world](https://hub.docker.com/r/imtiazmasrur/node-hello-world)
- Pull image `docker pull imtiazmasrur/node-hello-world`

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
- To see your namespace's pods `kubectl get pods -n developers-space`
- After any update apply on deployment.yaml file `kubectl apply -f deployment.yaml`

### Some Quick/Debugging Commands of Kubernetes
- Create deployment from [DockerHub](https://hub.docker.com) (image name - `"nginx"`) `kubectl create deployment nginx-deployment --image=nginx -n developers-space`
- To edit deployments (deployment name - `"node-hello-world"`) `kubectl edit deployment node-hello-world -n developers-space`
- To see the logs/consoles of pod (pod name - `"node-hello-world-6f455d9c5c-758fs"`) `kubectl logs node-hello-world-6f455d9c5c-758fs -n developers-space`
- Get pod info (pod name - `"node-hello-world-6f455d9c5c-758fs"`) `kubectl describe pod node-hello-world-6f455d9c5c-758fs -n developers-space`
- Enter pod console (pod name - `"node-hello-world-6f455d9c5c-758fs"`) `kubectl exec -it node-hello-world-6f455d9c5c-758fs -n developers-space sh`
- Delete deployment (deployment name - `"node-hello-world"`) `kubectl delete deployment node-hello-world -n developers-space`
- OR
- Delete deployment with filename `kubectl delete -f deployment.yaml -n developers-space`