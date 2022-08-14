---
id: Serve
title: Serve
sidebar_position: 5
data: January 13, 2022
---

By now, you should have a way to use Git for your day-to-day work. However, in order to use the Git collaboration features, you also need to have a remote Git repository. Although you can technically push and pull from your personal repository to modify content, this approach is discouraged because it's easy to mess up other people's progress if you're not careful. Also, you want your collaborators to be able to access the repository even when your computer is not online - having a more reliable public repository is useful. Therefore, the best way to collaborate with others is to have a common repository that you and your collaborators have access to and can push and pull from.

Setting up a Git server is not difficult. If you don't mind hosting your code on someone else's server, and don't want to go through the hassle of setting up and maintaining your own server, you can try a third-party repository hosting service.

A remote repository is usually just a bare repository—that is, a repository without a current working directory. because the repository is only
As a collaboration medium, there is no need to check the snapshot from disk; only the Git stuff is stored. Simply put, a bare repository is the .git in your project directory
Subdirectory content, no other information is included.

## Git protocol

Git can use four different protocols to transfer data:

-   Local protocol (Local)
-   HTTP protocol
-   SSH (Secure Shell) protocol
-   Git protocol

### local protocol

The most basic is the Local protocol, where the remote repository is another directory on the same host. This is often the case when every member of the team has access to a shared filesystem (such as a mounted NFS), or, less commonly, multiple people share the same computer. The latter is not ideal, as all your code repositories are more likely to be catastrophically lost if they persist on the same computer.

-   advantage

The advantages of a filesystem-based repository are simplicity and direct use of existing file permissions and network access permissions. If your team already has a shared filesystem, building a repository is easy. Just like setting up other shared directories, put a copy of the bare repository in a path that everyone can access, and set read/write permissions, and that's it. We will set up Git on the server and discuss how to export a Bare repository. This is also a quick way to pull updates from someone else's working directory. If you're working on a project with someone who wants you to pull updates from the repository, running a command like git pull /home/john/project is much easier than pushing to the server and fetching it back.

-   shortcoming

The downside of this approach is that a shared file system is often harder to configure and less convenient to access from multiple locations than basic network connection access. If you want to push content from home, you must first mount a remote disk, which is inconvenient to configure and slow compared to the access method of network connection. It is worth mentioning that this method is not necessarily the fastest if you are using a filesystem like a shared mount. Accessing the local repository is as fast as you can access the data. On the same server, if Git is allowed to access the local hard drive, accessing the repository via NFS is generally slower than accessing it via SSH. Ultimately, this protocol does not protect the warehouse from accidental damage. Every user has full shell access to the "remote" directory, and there is no way to prevent them from modifying or deleting Git internal files and corrupting repositories.

### HTTP protocol

There are two modes for Git to communicate via HTTP: **smart HTTP protocol and dumb (Dumb) HTTP protocol. **

#### Smart HTTP Protocol

The operation mode of Smart HTTP is similar to that of SSH and Git, but it runs on the standard HTTP/S port and can use various HTTP authentication mechanisms, which means that it is much simpler to use than the SSH protocol, such as the HTTP protocol. Username/password authorization, no need to set SSH public key.

#### Dumb HTTP protocol

If the server does not serve the smart HTTP protocol, Git clients will try to use the simpler "dumb" HTTP protocol. In the dumb HTTP protocol, the web server only treats the bare repository as a normal file and provides file services. The beauty of the dumb HTTP protocol is that it's easy to set up.

-   advantage

We'll only focus on the advantages of the smart HTTP protocol. The simplicity of using only a URL for different access methods and the fact that the server only prompts for authorization information when authorization is required makes it very easy for end users to use Git. Being able to use username/password authorization is a big advantage over the SSH protocol, so that users don't have to generate an SSH key pair locally and upload the public key to the server before using Git. For non-experienced users, or users who lack SSH-related programs on the system, the availability of the HTTP protocol is a major advantage. Similar to the SSH protocol, the HTTP protocol is also very fast and efficient. You can also serve read-only repositories over the HTTPS protocol, so you can encrypt data as you transfer it; or, you can even have clients use specific SSL certificates. Another benefit is that the HTTPS protocol is widely used, and typical corporate firewalls will allow data to pass through these ports.

-   shortcoming

On some servers, setting up the server side of the HTTPS protocol can be trickier than the SSH protocol. Other than that, serving Git with other protocols has little advantage over the smart HTTP protocol. If you're using authorized push over HTTP, managing credentials is a little more cumbersome than using SSH key authentication. However, you can choose to use a credential storage tool such as Keychain for macOS or Credential Manager for Windows. See how the credential store securely stores HTTP passwords.

### SSH protocol

The SSH protocol is often used as the transmission protocol when setting up a Git server. Because in most environments the server already supports SSH access - even if it doesn't it's easy to set up. The SSH protocol is also a network protocol for authenticating authorization; and, because of its ubiquity, it is easy to set up and use.

-   advantage

There are many advantages to using the SSH protocol. First, SSH is relatively simple to set up - SSH daemons are common, most administrators have experience using them, and
And most operating systems include it and related management tools. Second, access via SSH is secure - all transmitted data is authorized and encrypted. Finally, like the HTTPS protocol, Git protocol, and native protocols, the SSH protocol is efficient and will try to compress data as much as possible before transmission.

-   shortcoming
    The disadvantage of the SSH protocol is that it does not support anonymous access to Git repositories. If you use SSH, the user must
    Access your host via SSH, which makes the SSH protocol unfavorable for open source projects, after all people might just want to clone your repository and look at it. If you're only using it on a corporate network, the SSH protocol might be the only one you'll ever use. If you want to provide anonymous read-only access and the SSH protocol at the same time, then in addition to pushing the SSH service for yourself, you also have to set up a service that others can access.

### Git Protocol

This is a special daemon included with Git; it listens on a specific port (9418), similar to the SSH service, but access does not require any authorization. For a repository to support the Git protocol, a git-daemon-export-ok file needs to be created -- it's a requirement for the Git protocol daemon to serve the repository -- but there are no security measures beyond that. Either anyone can clone this repository, or no one can. This means that, generally, you cannot push via the Git protocol. Since there is no authorization mechanism, once you open the push operation, it means that anyone on the network who knows the project URL can push data to the project. Needless to say, very few people do.

-   advantage

Currently, the Git protocol is the fastest network transport protocol used by Git. If your project has a lot of traffic, or your project is large and does not require user authorization for writing, it is a good choice to set up a Git daemon to provide services. It uses the same data transfer mechanism as SSH, but without the overhead of encryption and authorization.

-   shortcoming

The disadvantage of the Git protocol is that it lacks an authorization mechanism. It is not advisable to use the Git protocol as the only means of accessing the project repository. In general, SSH or HTTPS protocol access services are provided at the same time, only a few developers have push (write) permissions, and others have only read permissions through git:// access. The Git protocol is also perhaps the most difficult to set up. It requires its own daemon process, which requires configuring xinetd, systemd or other programs, which is not easy. It also requires the firewall to open port 9418, but corporate firewalls generally do not open this non-standard port. Large corporate firewalls usually block this port.

## escrow

Now there are many more modern and full-featured Git servers, GitLab is the most famous one, and GitHub and Gitte are both great open source communities.
