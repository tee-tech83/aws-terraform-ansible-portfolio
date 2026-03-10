# AWS Terraform + Ansible DevOps Portfolio Deployment

This project demonstrates a complete **Infrastructure as Code (IaC)** and **Configuration Management** workflow using **Terraform**, **Ansible**, and **AWS** to deploy a live portfolio website.

The infrastructure provisions an EC2 instance using Terraform and then configures the server automatically with Ansible to install Nginx and deploy the website files.

Live Website:
http://18.188.3.27

---

# Architecture Overview

User Browser
        |
        v
Internet
        |
        v
AWS EC2 Instance (Ubuntu)
        |
        v
Nginx Web Server
        |
        v
Static Portfolio Website

Infrastructure is provisioned with **Terraform** and configured using **Ansible automation**.

---

# Technologies Used

- AWS EC2
- Terraform
- Ansible
- Nginx
- Linux (Ubuntu)
- HTML
- CSS
- JavaScript
- SSH

---

# Project Structure

```
tee-felix-elite-portfolio
│
├── terraform
│   ├── main.tf
│   ├── variables.tf
│   ├── provider.tf
│   ├── outputs.tf
│   └── terraform.tfvars
│
├── ansible
│   ├── inventory.ini
│   ├── deploy.yml
│   └── ansible.cfg
│
└── website
    ├── index.html
    ├── style.css
    ├── script.js
    └── images
        └── tee-felix.jpg
```

---

# Infrastructure Provisioning (Terraform)

Terraform performs the following tasks:

1. Creates an AWS EC2 instance
2. Configures security groups
3. Attaches SSH key pair
4. Outputs public IP address

Run Terraform:

```
terraform init
terraform plan
terraform apply
```

Terraform outputs:

```
instance_public_ip
instance_public_dns
```

---

# Configuration Management (Ansible)

Ansible automatically configures the EC2 instance.

Tasks performed by Ansible:

- Connect to EC2 via SSH
- Update Ubuntu packages
- Install Nginx
- Remove default Nginx page
- Copy website files
- Start and enable Nginx

Run Ansible:

```
ansible-playbook -i inventory.ini deploy.yml
```

---

# Result

After automation completes, the portfolio website becomes available at:

```
http://EC2_PUBLIC_IP
```

---

# Author

Tee Felix  
AWS Cloud & DevOps Engineer  

Skills:
- AWS
- Terraform
- Docker
- Kubernetes
- CI/CD
- Infrastructure as Code
- Cloud Automation

Location: Ozark, Missouri
Email: tunrayofelixo@gmail.com