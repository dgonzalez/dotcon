# Introduction

This is a very simple Node app. Doesn't do anything, just exists in the ether so
it can be used to explain ArgoCD.

# Installing ArgoCD

Create a namespace:
```
kubectl create namespace argocd
```

Install ArgoCD:
```
kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml
```

More info [here](https://argo-cd.readthedocs.io/en/stable/getting_started/).


