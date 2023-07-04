# node-hello-world with docker and kubernetes deployment

Nodejs, Docker, Kubernetes

## Kubernetes

### Docker Authorization
- Authorize your Docker account `kubectl create secret docker-registry regcred --docker-username=<your-name> --docker-password=<your-pword> --docker-email=<your-email> -n <your-namespace>`

### Create Namespace
- Create a namespace `kubectl create namespace developers-space`
- OR
- Run `kubectl apply -f namespace.yml`
- To see all namespace `kubectl get namespace`

### Create Deployment
- To see default namespace (everything) `kubectl get all`
- OR
- To see all namespace (everything) `kubectl get all -A`
- OR
- To see all your named namespace (everything) `kubectl get all -n developers-space`
- To see your namespace's pods `kubectl get pods -n developers-space`
- After any update on deployment.yaml file `kubectl apply -f deployment.yaml`