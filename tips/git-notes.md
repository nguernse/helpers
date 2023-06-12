# Git Notes

Common tips when working with version control, such as Git.

---

## Why does `git pull` not work after updating the MacOS?

**context**:

You may find that when you open a terminal in Visual Studio Code (VSCode) and do a `git pull` an error occurs.

**solution**:

Open a terminal and run `xcode-select --install`

---

## How do I stash a single file?

**context**:

You may have made multiple changes to files, you want to commit some, but stash changes to a file not yet ready to be comitted.

**solution**:

If you want to add a message:

```
git stash push -m "stash message" filename.ext
```

If you do not require a message:

```
git stash -- filename.ext
```

Or if you want to do it from VScode:

- Navigate to the `Source Control` panel on the left-hand side
- From the list of changes, right click the desired file
- Select `stash changes`


**resources**:

- [https://stackoverflow.com/questions/12420924/stash-just-a-single-file](https://stackoverflow.com/questions/12420924/stash-just-a-single-file)
---