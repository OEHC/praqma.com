---
title:      Git autostash
subtitle:   Pulling changes into a dirty workspace
tags:       [Git, Tips]
author:      jkrag
comments:    true
avatar:     /images/training/git-logo.png
---

__Investigating the new git autostash feature and how to use it to allow pulling new changes into a dirty workspace.__
<!--break-->

## Why can't git....?

While recently teaching an introductory Git training course, I received an interesting question from some users that were currently using Mercurial. Paraphrasing a bit:

>"Why can't I pull when I have a dirty workspace, when Mercurial can do this out of the box?"

I gave the immediate answer that this is just Git's way of protecting the user from possibly harmful and, more importantly, irreversable changes. Git by default takes a very paranoid approach to any operations that change dirty files in your file system, when Git itself can't get you out of those changes again. _This is normally considered a feature_.

The known "workaround", or possible workflow, is to stash any changes before doing a pull (with `git stash save`, and then unstash them again (`git stash pop`) when done. 

It seems obvious that it should be easy to automate this with a git alias, but it turns out that this isn't trivial, as git stash doesn't fail gracefully when there are no local changes.

## Git autostash
Following the training, I did a bit of thinking and reading up on recent changs to Git. It turns out that there is actually support for this in Git now and I thought it would be worth a short blog post.

Since Git version 2.6, `git rebase` now has a feature/option called **autostash**.

From **`git rebase`** docs:

```
--autostash
--no-autostash
Automatically create a temporary stash before the operation begins, and apply it after the operation ends. This means that you can run rebase on a dirty worktree. However, use with care: the final stash application after a successful rebase might result in non-trivial conflicts.
```

## The manual way
As a first step, this enables us to use the following process:

`git fetch`
followed by:
`git rebase --autostash`

and this will automagically stash any local changes, "do the nice thing" (i.e. rebase any local commits onto the incomming ones), and then unstash your changes again.

Unfortunately there is no equivalent switch in `git pull` even when using `git pull --rebase`, but don't despair. 

## Using git config 
Luckily and unsurprisingly, git comes with an equivalent config feature called `pull.rebase`. 

As `git pull --rebase` uses `git rebase`under the hood, this config parameter is respected. 

This means that you can run:

```
git config rebase.autoStash true
```

and then `git pull --rebase` will do the autosquash thing henceforth.

## Going all in
If you really want to commit to the rebase behaviour full time, you can combine it with `pull.rebase true` config option:

```
git config --global pull.rebase true
git config --global rebase.autoStash true
```

As a result, any `git pull` will always go for the "rebase" process combined with autostashing and unstashing of local changes. Pretty slick...

## Possible conflicts
At this point it is worth mentioning the obvious and unavoidable situation that the stashed changes might conflict with some incoming pulled changes.

The resulting output would be something similar to:

```
✗ git pull 
Created autostash: 094ad5c
HEAD is now at d39c25c repo1 - readme
First, rewinding head to replay your work on top of it...
Fast-forwarded master to 6b6e1d4262fd5bc8d2b974f81222003a6c67fea6.
Applying autostash resulted in conflicts.
Your changes are safe in the stash.
You can run "git stash pop" or "git stash drop" at any time.
```

The end result is that git plays it safe. It puts your workspace in a conflicted state that you can resolve as always using your favourite editor or mergetool. At the same time it keeps the stash safe and sound in case you would want to e.g. reset hard and try again:

```
➜ git stash list
stash@{0}: autostash
```


## Using an alias instead
If you don't want to commit to this workflow and don't want to run the multi step `git fetch` and `git rebase --autostash` there is the option of creating a sensible alias.

A suggestion would be:

```
git config --global alias.up '!git fetch && git rebase --autostash FETCH_HEAD'
```

Then you can just selectively use `git up` when you want to update using the rebase + autostash procedure.


