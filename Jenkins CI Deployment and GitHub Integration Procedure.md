
# # Jenkins CI Setup with GitHub Integration (VM-based)

## Background：
This repository documents the step-by-step procedure for deploying Jenkins on a virtual machine and integrating it with a GitHub repository to enable Continuous Integration (CI).

## 1. Environment Overview 
| Component | Description |
|---------|------------|
| OS | Ubuntu 24.04  (Virtual Machine) |
| Jenkins | Jenkins 2.554  |
| Java | OpenJDK 17 |
| SCM | GitHub |
| CI Trigger | GitHub Webhook |


## 2. Virtual Machine Provisioning

### 2.1 Install SSH 
After starting the virtual machine, we installed SSH to allow remote access.
To simplify VM management, Tera Term was used to connect to the VM via SSH.

``sudo apt update``

``sudo apt install -y openssh-server``

### 2.2 Verify SSH Service Status
Confirm that the SSH daemon (sshd) is running to allow remote access to the virtual machine.
``sudo systemctl status ssh``

Verify that the service status is shown as:
 * Active: active (listening) 

If the SSH service is inactive, start it and enable it at boot using the following commands:

`` sudo systemctl start ssh ``  (start the SSH service immediately)

``sudo systemctl enable ssh``   (enable the SSH service to start on system boot)


### 2.3 use Tera Term to connect to the VM
> Condition: make sure the VM is configured with a **briged network adapter
the default mode is **NAT** , as it requires port forwarding and is less convenient for future maintenance.

#### Verify VM IP Address
`` ip addr `` 


After verifying that the SSH service was running, the VM was accessed remotely using Tera Term for daily administration.



<img width="742" height="493" alt="image" src="https://github.com/user-attachments/assets/c7c11fb7-5f79-47ba-addc-2a81825bb93c" />


<img width="1031" height="461" alt="image" src="https://github.com/user-attachments/assets/f99c467f-e1b4-4abd-ad09-ea1f20384c89" />



## 3. Install Jenkins
Jenkins was installed on the virtual machine using the official Jenkins APT repository.

sudo apt update
sudo apt install -y jenkins



## 4. Access Jenkins via port 8080 and  integrate it with the GitHub repository.

### 4.1 Create Personal Access Token in GitHub
To allow Jenkins to access GitHub, a Personal Access Token (PAT) was created.

`` setting　→　Developer Settings`` 

<img width="1546" height="459" alt="image" src="https://github.com/user-attachments/assets/2bfab195-8e79-4ddd-8815-d11682a1a1e1" />

### 4.2 Create a Credential in Jenkins
Create a Credential using that PAT in Jenkins to access GitHub

using the “Username with password” type.

<img width="502" height="573" alt="image" src="https://github.com/user-attachments/assets/480c105a-98ab-4ef8-b518-7af17be7a00f" />


username is your Github's username
password is the PAT

<img width="501" height="614" alt="image" src="https://github.com/user-attachments/assets/79c4849f-2306-4a13-bfd7-7b7e71f0ad10" />


### 4.3 Create a Jenkinsfile in Github

A Jenkinsfile was created and committed to the GitHub repository to define the CI pipeline.
The pipeline configuration is maintained as code and version-controlled together with the application source code.
<img width="601" height="769" alt="image" src="https://github.com/user-attachments/assets/54651c1c-233b-40fe-9807-b983533cbfe6" />



## 5. Create a Jenkins Pipeline job

### 5.1 Create a Jenkins Pipeline job
Configure it to use the Jenkinsfile from SCM

**Enable the GitHub hook trigger for GITScm polling.**

<img width="747" height="257" alt="image" src="https://github.com/user-attachments/assets/0860c784-9244-4d26-be0d-cae9228855c9" />

**Ｃonfigure Pipeline**
Pipeline definition：✅ Pipeline script from SCM

SCM：✅ Git

Repository URL：✅ GitHub repo

Credentials：✅ Jenkins 中配置的 GitHub credential（PAT）

Branch：✅ */main

Script Path：✅ Jenkinsfile

<img width="884" height="913" alt="image" src="https://github.com/user-attachments/assets/3e080bf2-b175-4cef-a5e7-9b60f2c02db6" />


### 5.2 Run / trigger the pipeline

After saving the pipeline configuration, the pipeline was triggered manually to verify that the Jenkinsfile executed successfully.
### Common Issues and Troubleshooting

❌ Issue 1: Pipeline Not Triggered Due to Wrong Branch Configuration
Cause
The pipeline was configured to track the main branch, but the Jenkinsfile was committed to a different branch.

❌ Issue 2: Build Failed Due to Missing npm in the VM
Cause
Node.js and npm were not installed on the virtual machine.

❌ Issue 3: Permission Denied When Accessing GitHub Repository
Cause
The Jenkins credential was not correctly configured, or the GitHub Personal Access Token (PAT) lacked sufficient permissions.

