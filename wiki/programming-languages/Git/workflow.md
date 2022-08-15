---
id: WorkFlow
title: Work Flow
sidebar_position: 4
data: January 13, 2022
---

You now have a remote Git repository serving code shared by all developers, and you are familiar with basic Git commands in a local workflow. You can now learn how to take advantage of some of the distributed workflows that Git provides.

## Distributed Workflow

Contrary to traditional centralized version control systems (CVCS), the distributed nature of Git makes collaboration among developers more flexible and diverse. In a centralized system, each developer is like a node connected to a hub that works roughly like each other. In Git, each developer acts as both a node and a hub—that is, each developer can contribute his code to other repositories, while maintaining his own public repository, allowing Others can work on it and contribute code.

### Centralized Workflow

What is commonly used in centralized systems is a single point of collaboration model - centralized workflow. A central hub, or repository, that accepts code and everyone syncs their work with it. Several developers act as nodes, that is, the consumers of the central warehouse are synchronized with the central warehouse.

### Integration Manager Workflow

Git allows multiple remote repositories to exist, enabling a workflow where each developer has write access to his own repository and read access to everyone else's repository. In this case there is usually an authoritative repository representing the "official" project. To contribute to this project, you need to clone a public repository of your own from the project and push your changes there. You can then ask the maintainer of the official repository to pull the update and merge it into the main project. The maintainer can add your repository as a remote, test your changes locally, merge it into their fork and push back to the official repository. This process works as follows:

1. The project maintainer pushes to the main repository.
2. Contributors clone this repository and make changes.
3. Contributors push data to their own public repositories.
4. The contributor sends the maintainer an email requesting to pull his own update.
5. The maintainer adds the contributor's repository as a remote repository in his local repository and merges the changes.
6. The maintainer pushes the merged changes to the main repository.

### Supervisor and Deputy Supervisor Workflow

This is actually a variant of the multi-repository workflow. This way of working is typically used in very large projects with hundreds of collaborating developers, such as the famous Linux kernel project. Various integration managers, called lieutenants, are responsible for specific parts of the integration project. Above all these deputy directors is an overall integration manager called the dictator who is responsible for the overall planning. The supervisor-maintained repository serves as the reference repository, providing all collaborators with the project code they need to pull. The whole process looks like this:

1. Ordinary developers work on their own topic branches and rebase from the master branch. Here is the master branch of the reference repository for supervisor pushes.
2. The deputy director merges the topic branch of the regular developer into his own master branch.
3. The supervisor merges the master branch of all deputy supervisors into his own master branch.
4. Finally, the supervisor pushes the integrated master branch into the reference repository so that all other developers can rebase from it.

## Contribute to a project

The main difficulty in describing how to contribute to a project is that there are many different ways of doing it. Because Git is so flexible and people can work together in different ways, it's not very accurate to describe how contributions should be made - every project is a little bit different. Influencing factors include the number of active contributors, chosen workflow, commit permissions, and possible external contribution methods.

The first influencing factor is the number of active contributors - the number of users actively contributing code to the project and how often they contribute. In many cases you may have two or three developers committing several times a day, maybe even less for inactive projects. For larger companies or projects, the number of developers may be in the thousands, with hundreds or thousands of commits per day. This is important because as you get more developers, you will have more problems making sure your code can be applied cleanly or merged easily. Committed changes can appear outdated, or they can be severely damaged by merged work while you are making changes or waiting for them to be approved for application. How can I guarantee that the code is always up to date and the commits are always valid?

The next factor is the **workflow used by the project**. Is it centralized, i.e. every developer has the same limit on writing to mainline code? Does the project have a maintainer or integrator who checks all patches? Are all patches approved after peer review? Are you involved in that process? Is there a system of lieutenants to which you must submit your work first?

The next factor is **commit permissions**. Having write access to a project makes a huge difference in the process required to contribute to a project. How would a project choose to accept contributed work without write access? Is there even a specification for how to contribute? How much work do you contribute at one time? How often do you contribute?

### Submission Guidelines

```shell
Capitalized abstract (50 characters or less)

If necessary, add more detailed explanatory text. Wrap at about 72 characters.
In some cases, the first line is used as the header of an email, and the rest of the text is used as the body.
A blank line separating the abstract from the body is required (unless you omit the body entirely),
Tools like rebasing won't work if you mix the two.

Write commit messages in an imperative tone: use "Fix bug" instead of "Fixed bug" or "Fixes bug".
This convention is the same as the git merge and git revert commands to generate commit instructions.

Blank lines follow further paragraphs.

- Labels are also possible.

- Bullets can use the typical hyphen or asterisk, followed by a space, with blank lines between lines,
 But it can vary according to different conventions.

- Use hanging indents
```

### Private small team

Private small teams usually consist of more than two developers, and the workflow is relatively simple:

1. Developer John, cloned the repository, made changes, and committed it locally.

2. Developer Jessica, did the same thing - cloned the repository and committed a change:

3. Jessica pushes her work to the server and everything works fine.

4. John makes some changes later, commits them to the local repository, and then tries to push them to the same server.

5. At this point John will fail the push because Jessica has already pushed her changes.

6. Because John has to grab Jessica's upstream changes and merge them into his local repository before he is allowed to push.

7. In the first step, John grabs Jessica's work.

8. In the second step, John merges the work.

…………

### Private management team

Contributors collaborate on feature-based private teams, and the contributions of these teams will be integrated by others.

1. John and Jessica work on a feature branch (featureA).
2. Jessica is simultaneously working on the second feature branch (featureB) with the third developer, Josie.
3. The company uses an integration-manager workflow where the work of independent groups can only be integrated by specific engineers, and the master branch of the main repository can only be updated by those engineers.
4. In this case, all work is done on team-based branches and later pulled together by the integrator.

…………

### Derived public projects

The first example describes using fork to contribute on a Git hosting that supports simple fork. Many hosting sites support this feature (including GitHub, BitBucket, repo.or.cz, etc.), and many project maintainers expect this style of contribution.

The second example discusses projects that prefer to accept contributed patches via email.

### Public projects via Fork

First, you might want to clone the main repository, create a topic branch for the patch or sequence of patches you plan to contribute, and then do work there.

```shell
// clone the remote repository
git clone <url>

// switch to the project directory
cd project

// Create and switch to feature branch
git checkout -b featureA

// ... Work...
git commit

// ... Work...
git commit
```

When your fork work is done and ready to contribute back to the maintainers, go to the original project and hit the Fork button to create your own writable fork of the project. This repository then needs to be added as a new remote repository in the local repository, in this case called myfork:

```shell
// add fork repository
git remote add myfork <url>

// push feature branch
git push -u myfork featureA
```

When the work has been pushed to your fork repository, you need to notify the maintainers of the original project that you have work you want them to merge. This is usually called a pull request, and you can usually generate it through the website. It is also possible to run the git request-pull command and then manually email the subsequent output to the project maintainer.

On a project where you're not the maintainer, it's often convenient to have a master branch that always tracks origin/master, doing work on topic branches because you can easily discard them if they get rejected. Keeping the working topic separate from the topic branch will also make it easier to rebase your work if at the same time the main repo moves and your commits no longer apply cleanly.

For example, if you want to contribute second feature work to the project, don't continue working on the topic branch you just pushed - start over from the master branch of the main repository:

### Public items by mail

First, you clone the main repository, and then do your work there.

```shell
// clone the remote repository
git clone <url>

// switch to the project directory
cd project

// Create and switch to feature branch
git checkout -b topicA

// ... Work...
git commit

// ... Work...
git commit
```

There are now two submissions to be sent to the mailing list. Use git format-patch to generate a file in mbox format that can be mailed to the list - it converts each commit into an email with the first line of the commit message as the subject and the rest of the information and the patch introduced by the commit as the body.

```shell
git format-patch -M origin/master

// patch file
<file-name>.patch
<file-name>.patch
```

To post it to the mailing list, you can either paste the file into an email client or send it through a command line program.

```shell
// Use this command under the premise that the local mail server is set correctly.
git send-email <file-name>.patch
```

## Maintenance project

In addition to how to effectively contribute to a project, you may also need to understand how to maintain the project. This includes accepting and applying patches generated by others using format-patch and emailed, or integrating changes in remote repository branches added to the project. But whether it is managing the repository, or helping to verify and review the patches received, you need to agree with other contributors on a long-term sustainable way of working.

### Work in topic branch

It's like creating a new feature branch locally. After adding a contributor's commit branch passes local tests, it's time to consider whether to merge it into the long-term branch.

### Apply the patch from the mail

#### Apply the patch using the apply command

If you have received a patch that was created using a variant of git diff or the Unix diff command (which is not recommended, see the next section), you can use the git apply command to apply it. Assuming you saved the patch in /tmp/patch-ruby-client.patch, you can apply the patch like this:

```shell
git apply /tmp/patch-ruby-client.patch
```

#### Apply the patch using the am command

If the contributor of the patch is also a Git user and is proficient in using the format-patch command to generate the patch, your job will be much easier because the patch contains author and commit information for your reference.

To apply a patch generated by the format-patch command, you should use the git am command.

```shell
git am <file-name>.patch
```

#### checkout remote branch

If your contributor builds his own repository, pushes several changes to it, and then sends you the URL of the repository and the remote branch containing the changes, you can add it as a remote branch and have it locally Merge.

### Integrate contributed work

#### Merge Workflow

A basic workflow is to merge all work directly into the master branch. In this case, the code contained in the master branch is basically stable. When you finish work on a topic branch, or approve work contributed by others, you merge it into the master branch, then delete the topic branch, and so on.

#### Large project merge workflow

The Git project contains four long-term branches: master, next, pu (proposed updates) for new work, and maint for maintenance backports. Contributors' new work is included in topic branches in a manner similar to that described previously (see Managing a complex series of parallel topic branches receiving contributions.). The topic branch is then tested and evaluated to see if it has been merged, or if it still needs more work. Safe topic branches are merged into the next branch, which is then pushed so that everyone can try to integrate the features together.

#### Rebasing and Picking Workflow

In order to maintain a linear commit history, some maintainers prefer to rebase and cherry-pick contributed work on the master branch rather than merge it directly. When you've finished work on a topic branch and decide to integrate it, you can run the rebase command in that branch to rebuild the changes based on the current master branch (or a branch such as develop).

#### Tag a release

When you decide to make a release, you may want to tag it so that the release can be recreated at any later commit point.

#### Generate a build number

There is no sequence of numbers in Git like v123 that increments with each commit, if you want to give a commit a human-readable name, you can run the git describe command on it. In response, Git will generate a string consisting of the name of the most recent tag, the number of commits since that tag, and the partial SHA-1 value of the commit you describe (prefixed with g for Git):

```shell
git describe master
v1.6.2-rc1-20-g8c5b85c
```

#### Preparing for a release

Now you can publish a build. One of those things is to create an up-to-date snapshot archive for those poor packages that don't use Git. use
The git archive command does the job:

```shell
git archive master > archive.zip
```

#### Create a Submission Brief

Now is the time to notify those on the mailing list who are curious about what happened to your project. Use the git short-log command to quickly generate a changelog-like document containing new content to the project since the last release.

```shell
// includes all commits since v1.0.1
git short-log --no-merges master --not v1.0.1
```
