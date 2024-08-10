---
template: BlogPost
path: /resources/setting-up-users-for-server
date: 2024-05-10T12:00:00.137Z
title: Using Our Lab Server
titlevn: Sử dụng server
thumbnail: ""
metaDescription: Guide for setting up users on the lab server
---

## How to Connect to the Server

First, request permission from the team leader to access the server and create your account.

## Workspace & Data Storage

- **Drives:**
    - **SSD:** `/home/aiotlab3/` - for storing code, conda environments, and Docker-related data. **ALWAYS CHECK ITS CAPACITY BEFORE USING. DO NOT FLOOD IT. THE SERVER WILL CRASH IF YOU DO.**
    - **HDD:** `/media/aiotlab3/27934be5-a11a-44ba-8b28-750d135bc3b3/` - for storing data, models, and other large files.
- **Checking Drive Capacity:** Use `df -h` to check drive capacity.
- **Personal Workspace:** Store your workspace under `/home/aiotlab3/<Lab|Organization|Club|...>/<Username>`. For example: `/home/aiotlab3/AI4Code/manhtd`.

## Python Environment

We recommend using **Miniconda**. Follow [this tutorial](https://docs.anaconda.com/free/miniconda/#quick-command-line-install) to install it.

## Docker

Make sure to ask the team leader to add you to the Docker group before using it. Otherwise, you won't be able to use Docker since it requires `sudo` privileges.

## Using GPUs

- **Checking GPU Usage:** Use `nvidia-smi`.
- **PyTorch Users:** Be aware that `cuda:0` refers to GPU 1 and `cuda:1` refers to GPU 2.
- **Resource Sharing:** Please use the GPUs responsibly, as they are lab property and shared among all members.

