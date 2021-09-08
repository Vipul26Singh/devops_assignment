## Introduction
This repository holds the DevOps assignment. This project has a service, supplied with a Dockerfile.

## The assignment

There are a couple of requirements:
- [ ] The app should be deployed to a Kubernetes cluster 
- [ ] Kubernetes cluster can be on local (minikube) or any cloud provider (GCP/AWS etc)
- [ ] The pipeline should take care of configuring autoscaling of the application based on load. (spawn new containers when CPU usage goes above 70%)
- [ ] Access application via public ip (internally it is running on port 3000)
- [ ] Configure health check. Application is using /health endpoint to send the status


### Optional requirement
- [ ] Create a CI/CD pipeline to deploy the above nodejs application to a kubernetes cluster
- [ ] You can choose any CI/CD but GitLab is preferred (as we use the same in production)

### Discussion
- [ ] Gather metrics from deployed application
- [ ] Add SSL


Good luck with the assignment!
