---
id: Common Command
title: Common Command
sidebar_position: 6
data: June 16, 2022
---

## Configuration related

Omit the `--global` parameter means that only this project takes effect

```shell
# Initialize this warehouse ( Create a new warehouse)
git init
git config --global user.name "xxx" # Configure username
git config --global user.email "xxx@xxx.com" # Configure email
git config --global color.ui true # git Status and other commands automatically colorize
git config --global color.status auto
git config --global color.diff auto
git config --global color.branch auto
git config --global color.interactive auto
git config --global http.proxy # View current proxy settings
git config --global http.proxy 'http://127.0.0.1:1080' # Set http proxy
git config --global https.proxy 'socks5://127.0.0.1:1080' # Set https proxy
git config -- global --unset http.proxy #Delete proxy git config
```

## Code files are related to submissions

```shell
git status # View the current version status
git add t.txt # Add a single file to the staging area
git add . # Add all changed files to index, excluding delete
git       add
-u
# Only add all tracked files to index, excluding new files          'xxx' # Commit
git commit --amend -m 'xxx' # Merge the last commit (for repeated revisions)
git commit -am 'xxx' # Combine add and commit into one step
git rm xxx # Delete files in index
git rm -r * # Delete
git log recursively # Show commit log
git log -1 # Show 1 line of log -n is n lines
git log --stat # Show commit log and related change files
git log -p -m
git log -- filename # View the modification log of the file
git show xxxx # Display the details of a commit
git show dfb02 # You can only use the first few digits of the commitid
git show HEAD # Display the HEAD commit log
git show HEAD^ # Display the commit log of the previous version ^^ is the last two versions ^5 is the last 5 versions
git whatchanged # Display the file modification corresponding to the commit history
git revert xxxxxx # undo commit xxxxx
```

## tag related

```shell
git tag # Display existing tag
git tag -a v2.0 -m 'xxx' # Add v2.0 tag
git show v2.0 # Display the log and details of
v2.0 git log v2.0 # Display the log of v2.0
git push --tags # Push all tags to the remote warehouse
git tag -d tag_name # Delete the tag named tag_name locally
git push origin :refs/tags/tag_name # Remotely delete the tag named tag_name
```

## Difference comparison related

```shell
git diff # Show all changes not added to index
git diff --cached # Show all indexes that have been added but Changes not yet committed
git diff HEAD^ # Compare the difference with the previous version
git diff HEAD -- ./lib # Compare the difference with the lib directory of the HEAD version
git diff origin/master..master # Compare the remote branch master with what the local branch does not have on the master
git diff origin/master..master --stat # Only show the difference files, not the specific content
```

## Branch related

```shell
git clone git+ssh://git@xxx.xxx.xxx.xxx /xx.git # clone remote warehouse
git remote add origin git+ssh://git@xxx.xxx.xxx.xxx/xx.git # Add remote definition (for push/pull/fetch)
git branch # Display local branch
git branch --contains 50089 # show the branch containing commit 50089
git branch -a # show all branches
git branch -r # show all original branches
git branch --merged # Display all branches that have been merged into the current branch
git branch --no-merged # Display all branches that have not been merged into the current branch
git branch -m master master_copy # The local branch is renamed
git checkout -b master_copy # From the current branch Branch to create a new branch master_copy and check out
git checkout -b master master_copy # The full version above
git checkout dev/minibear2333 # Check out an existing branch
git checkout --track dev/minibear2333 # Check out the remote branch dev/minibear2333 and create a local Tracking branch
git checkout v2.0 # Check out version v2.0
git checkout -b devel origin/develop # Create a new local branch devel from the remote branch develop and check out
git checkout -- README # Check out the head version of the README file (available Rewind for modification errors)
git merge origin/master # Merge the remote master branch to the current branch
git cherry-pick xxxxxx # Merge and commit the revisions of xxxxxx
git push origin master # Push the current branch to the remote master branch
git push origin :dev/minibear2333 # Delete the dev/minibear2333 branch of the remote warehouse
git fetch # Get all remote branches (do not update Local branch, additional merge)
git fetch --prune # Get all original branches and clear the deleted branches on the server
git pull origin master # Get the remote branch master and merge it to the current branch
git mv README README2 # Rename the file README to README2
git reset --hard HEAD # Reset the current version to HEAD (usually used for merge failure rollback)
git rebase
git branch -d dev/minibear2333 # Delete branch dev/minibear2333 (need to confirm that the changes in this branch have been merged into other branches )
git branch -D dev/minibear2333 # Force delete branch dev/minibear2333, be careful
git ls-files # List files included in git index
git show-branch # Show current branch history
git show-branch --all # Show all branch history
```

## Show command

```shell
git ls- tree HEAD # Internal command: Display a git object
git rev-parse v2.0 # Internal command: Display the SHA1 HASH of a ref
git reflog # Display all commits, including orphaned nodes
git show xxx # Check which commits xxx have changed File content
git show HEAD # Display the status of the current branch yesterday
git log --pretty=format:'%h %s' --graph # Graphical commit log
git show HEAD~3 # Check what was changed in the penultimate commit
git show -s --pretty=raw xxxxxx
```

## temporary storage related

```shell
git stash # Temporarily store the current changes and set all to HEAD state
git stash list # View all
stash git stash show -p stash@{0} # Refer to the first
stash git stash apply stash@{0 } # Apply the first temporary storage
```

## Find

```shell
git grep "delete from" # Find the content of the file under the current branch, you can see the specific usage git grep --help
git grep "delete from" v2. 0 # Specify tag to find
```

## git index operation (tracking)

````shell
git update-index --assume-unchanged filename # Cancel local tracking
git update-index --no-assume-unchanged filename # Restore local Track
git ls-files -v| grep '^h\ ' # You can see local untracked
files```

## Manage remote branches

```shell
git remote # Without parameters, list existing remote branches
git remote -v #(-v is short for –verbose, take the first letter) List detailed information, list its remote after each name url
git remote add [shortname] url #Add remote warehouse
git fetch origin # The string origin refers to the corresponding warehouse address. For example, to fetch all the information that origin has but the local warehouse does not have, you can use
````

##Tag

```shell
git tag #List all tags
git tag -l "v1*" #Support fuzzy matching:
git tag v2.3 #Create tag
git tag v2.4 -a -m "test" # Create a lightweight tag `-a` parameter can be omitted
git show v2.4 #View the annotation tag
git tag -a v2.5 9fceb02 #History commit hit `tag`
git push origin v1.0 #Push a single tag
git push origin --tags #Push all tags
git tag -d v1.0 #Delete tags
git push origin -- delete v1.0 #Delete remote tags
git checkout v1.1 #Check out tags to local
git checkout -b v1. 1-dev v1.1 #Checkout tag to branch
```
