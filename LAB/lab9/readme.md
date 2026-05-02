# 🐳 Lab 9 – Ansible Automation with Docker

## 📖 Experiment 9: Ansible

---

## 🎯 Objective

- Understand Ansible architecture
- Automate server configuration using playbooks
- Use Docker containers as managed nodes
- Perform configuration tasks across multiple servers

---

## ⚠️ Problem Statement

Managing infrastructure manually across multiple servers leads to:

- Configuration drift  
- Inconsistent environments  
- Time-consuming repetitive tasks  
- Poor scalability  

---

## 💡 What is Ansible?

- Open-source automation tool
- Uses YAML-based playbooks
- Agentless (uses SSH)

---

## 🚀 Key Features

- Agentless
- Idempotent
- Declarative syntax
- Push-based execution

---

# ⚙️ Installation

```bash
pip install ansible
ansible --version
```

![ss1](images/1.png)

---

# 🐳 Docker SSH Server Setup

## Generate SSH Key

```bash
ssh-keygen -t rsa -b 4096
```

![ss2](images/2.png)

---

## Build Docker Image

```bash
docker build -t ubuntu-server .
```

![ss3](images/3.png)

---

## Run Container

```bash
docker run -d -p 2222:22 --name ssh-server ubuntu-server
```

![ss4](images/4.png)

---

## Test SSH

```bash
ssh -i ~/.ssh/id_rsa root@localhost -p 2222
```

![ss5](images/5.png)

---

# 🖥️ Multiple Servers

```bash
for i in {1..4}; do
  docker run -d -p 220${i}:22 --name server${i} ubuntu-server
done
```

![ss6](images/6.png)

---

# 📂 Inventory

```bash
echo "[servers]" > inventory.ini
```

![ss7](images/7.png)

---

# 🔌 Test Connectivity

```bash
ansible all -i inventory.ini -m ping
```

![ss8](images/8.png)

---

# 📜 Playbook

```yaml
---
- name: Configure servers
  hosts: all
  become: yes
  tasks:
    - name: Install packages
      apt:
        name: ["vim","htop","wget"]
        state: present
```

![ss9](images/9.png)

---

# ▶️ Run Playbook

```bash
ansible-playbook -i inventory.ini playbook1.yml
```

![ss10](images/10.png)

---

# ✅ Verification

```bash
ansible all -i inventory.ini -m command -a "cat /root/ansible_test.txt"
```

![ss11](images/11.png)

---

# 🧹 Cleanup

```bash
for i in {1..4}; do docker rm -f server${i}; done
```

![ss12](images/12.png)

---

# 🏁 Conclusion

- Ansible automates server management efficiently  
- Docker provides lightweight testing servers  
- Combination is powerful for DevOps workflows  

---

## 👨‍💻 Author

Aditya Sharma
Roll No: 500122015
