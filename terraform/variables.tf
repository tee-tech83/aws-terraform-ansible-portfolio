variable "aws_region" {
  description = "AWS region to deploy resources into"
  type        = string
}

variable "instance_type" {
  description = "EC2 instance type"
  type        = string
}

variable "key_name" {
  description = "Existing AWS key pair name"
  type        = string
}

variable "project_name" {
  description = "Project name for tagging"
  type        = string
}