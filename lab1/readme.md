# Lab 1: Virtual Machines vs Containers - A Comparative Study

## Software and Hardware Requirements

### Hardware
- 64-bit system with virtualization support enabled in BIOS
- Minimum 8 GB RAM (4 GB minimum acceptable)
- Internet Connection

### Software (Windows Host)
- Oracle VirtualBox
- Vagrant
- Windows Subsystem for Linux (WSL 2)
- Ubuntu (WSL distribution)
- Docker Engine (docker.io)

## Theory

### Virtual Machine
A Virtual Machine emulates a complete physical computer, including its own operating system kernel, hardware drivers, and user space. Each VM runs on top of a hypervisor.

**Characteristics:**
- Full OS per VM
- Higher resource usage
- Strong isolation
- Slower startup time

### Container
Containers virtualize at the operating system level. They share the host OS kernel while isolating applications and dependencies in user space.

**Characteristics:**
- Shared kernel
- Lightweight
- Fast startup
- Efficient resource usage

## Part A: Install Vagrant and Automate VM

### 1. Install Oracle VM
![Oracle VM Installation](images/ss1.png)

### 2. Download Vagrant
![Vagrant Download](images/ss2.png)

### 3. Run Vagrant to Automate the VM
![Vagrant VM Automation](images/ss3.png)

### 4. Run SSH into Vagrant
![Vagrant SSH Connection](images/ss4.png)

### 5. Perform Operations Inside VM
![VM Operations](images/ss5.png)

### 6. Halt the Vagrant
![Vagrant Halt](images/ss6.png)

### 7. Destroy Vagrant
![Vagrant Destroy](images/ss7.png)

## Part B: Containers using WSL (Windows)

### Step 1: Install WSL 2
```bash
wsl --install