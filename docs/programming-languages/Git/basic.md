---
id: Base
title: Base
sidebar_position: 2
data: January 13, 2022
---

If you only want to learn Git by reading one chapter, then this chapter is for you. This chapter covers the various basic commands you will use to accomplish various tasks with Git. After completing this chapter, you should be able to configure and initialize a repository, start or stop tracking files, stage or commit changes. This chapter will also show you how to configure Git to ignore specific files and file patterns, how to quickly and easily undo wrong actions, how to browse your project's version history and differences between commits, how to report to you Remote repository push (push) and how to pull (pull) files from your remote repository.

## Get Git repository

There are generally two ways to get a Git project repository:

1. Convert an unversioned local directory into a Git repository.
2. Clone an existing Git repository from another server.

### Initialize repository in directory

```shell
// Initialize the repository in the current directory
git init
```

This command will create a subdirectory called .git that contains all the necessary files for your initialized Git repository, which is the backbone of your Git repository.

### Clone an existing repository

If you want to get a copy of an existing Git repository, for example, if you want to contribute to an open source project, then you use the git clone command.

```shell
// clone the remote repository
git clone <url>
```

If you want to customize the name of the local repository when cloning the remote repository, you can specify the new directory name with additional parameters:

```shell
// Specify the local name of the warehouse
git clone <url> <name>
```

Cloning an existing repository is actually a split of multiple commands. First initialize a local warehouse, then add a remote warehouse, and finally pull the remote warehouse data to the local.

## Record each update to the repository

When we successfully have a repository, we can run git status as the repository status. Repositories are clean when no development is taking place. When we make changes to files in the working directory, each file in the working directory is no more than these two states:

-   **Tracked**: Refers to those files that have been included in version control, there are records of them in the last snapshot, after working for a period of time, their status may be unmodified, modified or put into staging Area. In short, tracked files are files that Git already knows about.
-   **Untracked**: All files in the working directory except tracked files are untracked files, which are neither in the record of the last snapshot nor put into the staging area.

Running git status will show which files we made changes, which are tracked and which are untracked. Then we can use git add to add the file to the staging area. After adding to the staging area, you can submit updates or continue working; if you continue working while making changes to a staged file, you can use git diff to view the differences between the file's workspace and the staging area.

If you submit a newly modified file to the staging area, the file in the staging area will be overwritten by the newly submitted file. After all the work development is completed and submitted to the staging area, run git commit to submit the update to the git directory and record the snapshot.

After a lot of development, if you want to review the commit history, you can use git log to view the commit history.

### Ignore files

Some files don't need to be managed by Git, and you don't want them to always appear in the untracked files list. In this case, we can create a file called .gitignore that lists the patterns of files to ignore. Different directories can have different .gitignores.

The format specification of the file .gitignore is as follows:

-   All blank lines or lines starting with # are ignored by Git.
-   Standard glob pattern matching can be used, which is applied recursively across the entire workspace (glob patterns are simplified regular expressions used by the shell).
-   Matching patterns can start with (/) to prevent recursion.
-   The matching pattern can end with (/) to specify a directory.
-   To ignore files or directories outside the specified pattern, use an exclamation mark (!) before the pattern to negate it.

> GitHub has a very detailed list of .gitignore files for dozens of projects and languages, you can find it at <https://github.com/github/gitignore>.

### Check current repository status

```shell
// View an overview of the current warehouse status
git status

// View a brief overview of the current warehouse status
git status -s
git status --short

// The specific difference between the current file and the staging area
git diff

// The specific difference between the staging area and the last commit
git diff --staged
git diff --cached
```

### Track new files or stage modified files

```shell
// add the file to the staging area
git add <file>

// add the path to the staging area
git add <path>
```

### Submit update

```shell
// Commit the update, starting a text editor to enter commit instructions.
git commit

// put the commit message on the same line as the command
git commit -m <msg>

// Skip staging and commit the tracked file directly.
git commit -a
```

## View commit history

### Common options for git log

```shell
// formatted output one line showing commit history
git log --oneline
```

| Options         | Description                                                                                                                                                  |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| -p              | Display the differences introduced by each commit in patch format.                                                                                           |
| --stat          | Display file modification statistics for each commit.                                                                                                        |
| --shortstat     | Show only the last line in --stat, modify, add, remove statistics.                                                                                           |
| --name-only     | Only show the list of modified files after committing information.                                                                                           |
| --name-status   | Display a list of new, modified, and deleted files.                                                                                                          |
| --abbrev-commit | Display only the first few characters of all 40 characters of the SHA-1 checksum.                                                                            |
| --relative-date | Display dates using shorter relative times instead of full format (eg "2 weeks ago").                                                                        |
| --graph         | Display branch and merge history in ASCII graph next to log.                                                                                                 |
| --pretty        | Display historical commit information in a different format. Available options include oneline, short, full, fuller, and format (to define your own format). |
| --oneline       | --pretty=oneline Shorthand for --abbrev-commit.                                                                                                              |

### git log --pretty=format Common options

```shell
// format can customize the display format of the record
git log --pretty=format:"%h - %an, %ar : %s"
```

| Options | Description                                                  |
| ------- | ------------------------------------------------------------ |
| %H      | Full hash of the commit                                      |
| %h      | Shorthand hash of the commit                                 |
| %T      | The full hash of the tree                                    |
| %t      | Shorthand hash of the tree                                   |
| %P      | Full hash of parent commit                                   |
| %p      | Shorthand hash of parent commit                              |
| %an     | Author name                                                  |
| %ae     | Author's email address                                       |
| %ad     | author revision date (can be customized with --date= option) |
| %ar     | Author revision date, by how long ago                        |
| %cn     | Submitter's name                                             |
| %ce     | Submitter's email address                                    |
| %cd     | Commit Date                                                  |
| %cr     | Commit date (how long ago)                                   |
| %s      | Commit Instructions                                          |

### Options to limit git log output

| Options           | Description                                                                  |
| ----------------- | ---------------------------------------------------------------------------- |
| -n                | Display only the most recent n commits.                                      |
| --since, --after  | Show only commits after the specified time.                                  |
| --until, --before | Show only commits before the specified time.                                 |
| --author          | Show only commits whose authors match the specified string.                  |
| --committer       | Show only commits whose committers match the specified string.               |
| --grep            | Show only commits whose commit description contains the specified string.    |
| -S                | Show only commits with additions or deletions matching the specified string. |

## undo the operation

Sometimes, after submitting, we find that we have missed a few files and have not added them, or that the submission information is wrong. At this point, you can run with the --amend option
Item's commit command to resubmit:

```shell
// undo the last commit
git commit --amend
```

This command will commit the files in the current staging area together, and there will only be one commit in the end - the second commit will replace the result of the first commit.

### Undo staged files

```shell
// Cancel the staging area file
git reset HEAD <file>
```

git reset is indeed a dangerous command, especially if the --hard option is added. However, in the above scenario, the files in the working directory have not been modified, so it is relatively safe.

### Undo changes to files

```shell
// Undo file changes in the workspace
git checkout -- <file>
```

It's important to remember that `git checkout -- <file>` is a dangerous command. Any local changes you made to that file will disappear - Git will overwrite it with the most recent commit. Don't use this command unless you know for sure that you don't want local changes to that file.

## remote repository

To be able to collaborate on any Git project, you need to know how to manage your own remote repository. Remote repositories are those hosted on the Internet or other networks
the repository of your project.

You can have several remote repositories, usually some are read-only to you and some are read-write. Collaborating with others involves managing remote repositories and pushing or pulling data as needed. Managing remote repositories includes understanding how to add remotes, remove invalid remotes, manage different remote branches and define whether they are tracked or not, and more.

### View remote repository

You can run the git remote command to see the remote repository server you have configured.

```shell
// View remote repository
git remote
```

You can also specify the option -v, which will display the shorthand saved by Git and its corresponding URL for reading and writing the remote repository.

```shell
// Display remote repository shorthand and its URL
git remote -v
```

### Add remote repository

You can add a new remote Git repository by running `git remote add <shortname> <url>`, specifying a convenient shorthand:

```shell
// Add a new remote Git repository
git remote add <remote-name> <url>
```

### Fetch and pull from remote repository

After you add a remote repository, you can pull data from the remote repository.

```shell
// Pull data from remote warehouse, do not automatically merge.
git fetch <remote-name>

// Fetch data from the remote repository and try to automatically merge into the current branch.
git pull
```

### Push to remote repository

When you want to share your project, you have to push it upstream.

```shell
// push the branch to the remote repository
git push <remote> <branch>
```

### View, rename and remove remote repositories

You can use the following commands to view, rename and remove remote repositories.

```shell
// View remote repository
git remote show <remote>

// rename the remote repository
git remote rename <old> <new>

// remove the remote repository
git remote remove <name>
```

## tagging

Git can tag a commit in a repository's history as important. Typically people will use this feature to mark publishing nodes ( v1.0 , v2.0 , etc.)

Git supports two types of tags: **lightweight** and **annotated**.

A lightweight tag is much like a branch that doesn't change - it's just a reference to a particular commit.

Annotation tags are a complete object stored in the Git database, they can be checked and contain the tagger's name, email address, date and time, as well as a tag information, and can be checked using GNU Privacy Guard (GPG) sign and verify. It is often recommended to create a note tag so you can have all of the above information.

But if you just want to use a temporary tag, or don't want to keep this information for some reason, you can also use a lightweight tag.

### Create tags

```shell
// create a lightweight tag
git tag <tagname>

// create a note label
git tag -a <tagname>
```

You can also tag past commits. , just enter the SHA-1 number of the commit.

```shell
// label later
git tag <tagname> <commit-id>
```

### View tags

```shell
// list existing tags
git tag

// display label information
git show <tagname>
```

### Shared tags

By default, the git push command does not send tags to the remote repository server. After creating the tag you must explicitly push the tag to the shared server.

```shell
// push tags to remote repository
git push origin <tagname>

// push all tags
git push origin --tags
```

### delete tag

```shell
// delete the label
git tag -d <tagname>

// delete the remote repository tag
git push origin --delete <tagname>
```

## Git aliases

Git doesn't automatically infer the command you want when you type part of it. If you don't want to enter the full Git command every time, you can use git
config file to easily set an alias for each command. as follows:

```shell
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.ci commit
git config --global alias.st status
```

Next, we can use git co equivalent instead of git checkout, and the same is true for others.
