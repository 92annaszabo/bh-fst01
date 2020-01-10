
# 2019. december 21., szombat


[előző alkalom](../20191217) [következő alkalom](../20200104)

# Git

📘[https://git-scm.com/book/en/v2](https://git-scm.com/book/en/v2)

```
$ git status
fatal: not a git repository (or any of the parent directories): .git
```

```
$ git init
Initialized empty Git repository in /Users/laszlo/work/sandbox/gitplay/.git/
```

```
$ git status
On branch master

No commits yet

nothing to commit (create/copy files and use "git add" to track)
```

```
$ git status
On branch master

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)

	somefile.txt

nothing added to commit but untracked files present (use "git add" to track)
```

```
$ git add somefile.txt
$ git status

On branch master

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)

	new file:   somefile.txt
```

```
$ git commit -m "initial commit"
[master (root-commit) 1a0220b] initial commit
 Committer: Laszlo <laszlo@Laszlos-MacBook-Pro.local>
Your name and email address were configured automatically based
on your username and hostname. Please check that they are accurate.
You can suppress this message by setting them explicitly. Run the
following command and follow the instructions in your editor to edit
your configuration file:

    git config --global --edit

After doing this, you may fix the identity used for this commit with:

    git commit --amend --reset-author

 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 somefile.txt
 ```

```
$ git status
On branch master
nothing to commit, working tree clean
```

```
$ git log
commit 1a0220b4efd919c6c1e86341b9c22648c8d58d3e (HEAD -> master)
Author: Laszlo <laszlo@Laszlos-MacBook-Pro.local>
Date:   Fri Dec 20 20:46:51 2019 +0100

    initial commit

```

```
$ git config user.name "Laszlo Szucs"
$ git config user.email "mrnobody@example.com"
```

```
$ git commit --amend --reset-author
```

```
$ git commit --amend --reset-author -m "initial commit"
[master ca2be72] initial commit
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 somefile.txt
```

```
$ git log
commit ca2be72521dd30c7516d9d46593e84fa00682f8b (HEAD -> master)
Author: Laszlo Szucs <mrnobody@example.com>
Date:   Fri Dec 20 20:54:22 2019 +0100

    initial commit
```

```
$ git status
On branch master
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

	modified:   somefile.txt

no changes added to commit (use "git add" and/or "git commit -a")
```

```
$ git diff
diff --git a/somefile.txt b/somefile.txt
index e69de29..3b18e51 100644
--- a/somefile.txt
+++ b/somefile.txt
@@ -0,0 +1 @@
+hello world
```

```
$ git add somefile.txt
On branch master
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

	modified:   somefile.txt


```

```
$ git diff
```

```
$ git diff --cached
diff --git a/somefile.txt b/somefile.txt
index e69de29..3b18e51 100644
--- a/somefile.txt
+++ b/somefile.txt
@@ -0,0 +1 @@
+hello world
```

```
[master 71ea8b2] add greeting content
 1 file changed, 1 insertion(+)
```

```
$ git status
On branch master
nothing to commit, working tree clean
```

```
$ git log
commit 71ea8b2b89821cceedf3aacccba091ea8de3651c (HEAD -> master)
Author: Laszlo Szucs <mrnobody@example.com>
Date:   Fri Dec 20 21:06:56 2019 +0100

    add greeting content

commit ca2be72521dd30c7516d9d46593e84fa00682f8b
Author: Laszlo Szucs <mrnobody@example.com>
Date:   Fri Dec 20 20:54:22 2019 +0100

    initial commit
```

