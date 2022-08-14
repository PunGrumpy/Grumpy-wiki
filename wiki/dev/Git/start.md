---
id: Start
title: Start
sidebar_position: 1
data: January 13, 2022
---

This chapter introduces what you need to know before getting started with Git. We will first understand the historical background of some version control tools, and then try to get Git running on your system until it is finally configured and can start development work normally. By the end of this chapter, you'll understand why Git is so popular and why you should start using it right away.

## Version control system

Version Control Systems (VCS for short) is a system that records changes in the content of one or several files for future revisions to a specific version.

### Local version control system

Most local version control systems use databases to record the differences between previous updates of files.

One of the most popular is called RCS, which can be found on many computer systems today. RCS works by saving patch sets (patches refer to changes before and after file revisions) on the hard disk; by applying all the patches, the file content of each version can be recalculated.

### Centralized version control system

In order to solve the problem that local version control systems cannot work together, a centralized version control system (Centralized Version Control Systems, referred to as CVCS) was born. It uses a single, centrally managed server that saves revisions of all files; collaborators connect to the server through clients to pull the latest files or submit updates.

**Pros**: Compared to local VCS. Now everyone can see to some extent what other people in the project are doing. And administrators can easily control the permissions of each developer, and managing a CVCS is much easier than maintaining a local database on each client.

**Cons**: The obvious disadvantage is the single point of failure of the central server. For example, if the downtime is one hour, then within this hour, no one can submit updates, and they cannot work together; if the disk where the central database is located is damaged, and proper backups are not made, there is no doubt that you will lose all data—— Include the entire change history of the project, leaving only the individual snapshots that people keep on their respective machines.

### Distributed Version Control System

In order to solve the pain point of centralized version control system, distributed version control system (Distributed Version Control System, DVCS for short) came out. Distributed, as the name implies, each node is based on a mirror copy of the recognized central node server, so each node has complete information about the code repository. Therefore, there is no central node failure that cannot work, physical damage that cannot be recovered, and incomplete log history that prevent collaborators from cooperating with each other.

Furthermore, many of these systems can be specified to interact with several different remote code repositories. In this way, you can collaborate with people in different working groups on the same project. You can set up different collaborative processes as needed, such as a hierarchical model-style workflow, which was not possible in previous centralized systems.

## A brief history of Git

Like many great things in life, Git was born in a time of great contention and innovation.

The Linux kernel open source project has a large number of participants. The vast majority of Linux kernel maintenance was spent on the tedious business of submitting patches and keeping archives (between 1991 and 2002). By 2002, the entire project team began to enable BitKeeper, a proprietary distributed version control system, to manage and maintain the code.

In 2005, the partnership between the commercial companies that developed BitKeeper and the Linux kernel open source community ended, and they took back the Linux kernel community's right to use BitKeeper for free. This forced the Linux open source community (especially the creator of Linux, Linus Torvalds) to develop its own versioning system based on lessons learned from using BitKeeper. They set several goals for the new system:

-   **speed**
-   **Simple Design**
-   **Strong support for non-linear development mode (allowing thousands of parallel development branches)**
-   **Fully distributed**
-   **Ability to efficiently manage very large scale projects like Linux kernel (speed and data volume)**

Since its inception in 2005, Git has matured and matured, maintaining its original goals while being highly usable. It's fast, great for managing large projects, and has an incredibly non-linear branch management system.

## Git features

So, in short, what kind of system is Git? What are its main features?

### Directly record snapshots, not diff comparisons

The main difference between Git and other version control systems is the way data is treated; **Git records snapshots directly, not diffs**. Every commit update or save project state in Git creates a snapshot of all files and saves the index of the snapshot; if the file is not modified, Git will not re-store the file, but only keep a link pointing to the previously stored file . Git treats data more like a stream of snapshots.

### Almost all operations are performed locally

Since Git is a distributed version control system, most operations only need to access local file resources without operating on a recognized central node server. Therefore, most of Git's operations seem to be completed instantly, and there is no network delay.

### Git guarantees data integrity

All data in Git is checksummed with a SHA-1 hash (hash) before being stored and indexed by the hash, not the filename. This means that it is impossible to change any file contents or directory contents without Git's knowledge.

```shell
// SHA-1 hash
24b9da652252987aa493b52f8696cd6d3b00373
```

### Git generally only adds data

Because Git generally only adds data, it's hard for you to get Git to do anything irreversible, or to have it clear data in any way.

### Three states of Git

Git has three states, and your files may be in one of them: **committed**, **modified**, and **staged**.

-   Modified means that the file has been modified, but has not been saved to the database
-   Staged means that the current version of a modified file is marked for inclusion in the next committed snapshot.
-   Committed means that the data has been safely saved in the local database.

This will give our Git project three phases: **Working Directory**, **Staging Area**, and **Git Directory (Repository)**.

-   The content extracted independently from a certain version of the project by the workspace is placed on disk for you to use or modify.
-   The staging area (term: index) holds the list of files to be submitted next.
-   The Git directory is where Git uses to keep a project's metadata and object database.

So the basic workflow of Git is as follows:

1. Modify the file in the workspace (**modified**).
2. Optionally stage the changes you want to commit next time, so that only the changed parts are added to the staging area (**staged**).
3. Commit the update, find the file in the staging area, and store the snapshot permanently in the Git directory (**committed**).

## Running Git for the first time

After installing Git, you need to customize your Git environment. You only need to configure it once, and keep the configuration information when upgrading.

### Git configuration

1. System configuration: Contains the general configuration of each user on the system and its warehouse.
2. Global configuration: only for the current user, effective for all warehouses on the system.
3. Warehouse configuration: Only valid for the current warehouse, which is the default option.

The configuration file scope adopts the principle of proximity, and each level will override the configuration of the previous level. To modify different configuration files, you need to pass different parameters when executing git config.

```shell
git config --system
git config --global
git config --local
```

### User Info

It's important to set up a username and email address, because this information is used with every Git commit, and written into every commit, it cannot be changed.

```shell
git config --global user.name <user-name>
git config --global user.email <email@email.com>
```

### View configuration

```shell
// all Git configuration
git config --list

// Check a certain configuration of Git
git config <key>
```

### Get help

```shell
git help <verb>
git <verb> --help
man git-<verb>

// concise help file
git <verb> -h
```
