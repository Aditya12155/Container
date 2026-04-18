# 🐳 Lab 5: Docker Volumes, Environment Variables & Networks


This experiment covers:
- Docker Volumes (Persistent Storage)
- Environment Variables
- Monitoring & Networks

---

## 📁 Project Structure

lab5/
│── 2nd/
│── images/
│   ├── 1.png → 17.png
│── README.md

---

# 🔹 Part 1: Docker Volumes – Persistent Data Storage

## 🧠 Understanding Data Persistence

### ❗ Problem: Container Data is Ephemeral  
Data inside a container is lost when the container is removed.

![Step](images/1.png)

---

## 🔹 Create Container & Write Data

```bash
docker run -dit --name test-container ubuntu
docker exec -it test-container bash
```

![Step](images/2.png)

---

## 🔹 Verify Data Inside Container

```bash
docker exec test-container cat /data/message.txt
```

![Step](images/3.png)

---

# 🔹 Volume Types

## 1️⃣ Anonymous Volumes

```bash
docker run -v /data ubuntu
```

![Step](images/4.png)

---

## 2️⃣ Named Volumes

```bash
docker volume create myvolume
docker run -v myvolume:/data ubuntu
```

![Step](images/5.png)

---

## 3️⃣ Bind Mounts (Host Directory)

```bash
mkdir myfolder
docker run -v $(pwd)/myfolder:/data ubuntu
```

![Step](images/6.png)

---

## 🔹 Data Persistence Check

```bash
docker stop test-container
docker start test-container
```

![Step](images/7.png)

---

# 🔹 Practical Example: Database Storage

MySQL with Named Volume ensures data persists.

![Step](images/8.png)

---

# 🔹 Volume Management Commands

```bash
docker volume ls
docker volume create myvolume
docker volume inspect myvolume
docker volume prune
```

![Step](images/9.png)

---

# 🔹 Part 2: Environment Variables

## 🔹 Using -e Flag

```bash
docker run -e NAME=Aditya ubuntu env
```

![Step](images/10.png)

---

## 🔹 Using Env File

```bash
docker run --env-file .env ubuntu
```

![Step](images/11.png)

---

## 🔹 Python Example

```python
import os
print(os.getenv("NAME"))
```

![Step](images/12.png)

---

## 🔹 Test Environment Variables

```bash
docker exec test-container env
```

![Step](images/13.png)

---

# 🔹 Part 3: Monitoring & Networks

## 🔹 Check Containers

```bash
docker ps
```

![Step](images/14.png)

---

## 🔹 List Networks

```bash
docker network ls
```

![Step](images/15.png)

---

## 🔹 Create Network

```bash
docker network create mynetwork
```

![Step](images/16.png)

---

## 🔹 Connect Container

```bash
docker network connect mynetwork test-container
```

![Step](images/17.png)
![Step](images/18.png)
![Step](images/19.png)
![Step](images/20.png)
![Step](images/21.png)
![Step](images/22.png)
![Step](images/23.png)
![Step](images/24.png)
![Step](images/25.png)

---

# ✅ Conclusion

- Docker volumes ensure data persistence  
- Environment variables allow flexible configuration  
- Networks enable container communication  
