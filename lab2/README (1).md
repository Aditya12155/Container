# 🐳 Lab 2 – Docker Installation, Configuration, and Running an Image

## 📖 Experiment 2
This experiment demonstrates how to install Docker, pull an image, run a container with port mapping, and perform container lifecycle operations.

---

## 🎯 Objective
- To understand Docker installation and configuration
- To pull an image from Docker Hub
- To run and manage a container
- To perform Docker lifecycle commands

---

## 🛠️ Prerequisites
- Docker installed on the system
- Command line / terminal access
- Internet connection

Check Docker installation:

```bash
docker --version
```

---

## 🚀 Procedure

### Step 1: Pull Docker Image

```bash
docker pull nginx
```

---

### Step 2: Run Container with Port Mapping

```bash
docker run -d -p 8080:80 nginx
```

Access the application in your browser:

http://localhost:8080

---

### Step 3: Verify Running Containers

```bash
docker ps
```

---

### Step 4: Stop the Container

```bash
docker stop <container_id>
```

---

### Step 5: Remove the Container

```bash
docker rm <container_id>
```

---

### Step 6: Remove the Image

```bash
docker rmi nginx
```

---

## 📊 Result
Docker images were successfully pulled, containers were executed, and lifecycle management commands were performed successfully.

---

## 📚 Key Commands Summary

| Command | Description |
|---------|-------------|
| docker --version | Check Docker version |
| docker pull nginx | Download NGINX image |
| docker run -d -p 8080:80 nginx | Run container in detached mode |
| docker ps | List running containers |
| docker stop <container_id> | Stop container |
| docker rm <container_id> | Remove container |
| docker rmi nginx | Remove image |

---

## 🏷️ Author
**Aditya Sharma**
