# Misc. Troubleshooting

Common issues encountered while programming.

---

## What is Nano and why can I not save my changes?

**content**:

You may use Nano when `git` wants to write a merge message, or you need to quickly edit a file.

**solution**:

- In a terminal type `nano <filename>` to edit
- `ctrl + o` will save file changes
- `ctrl + x` will exit and give the option to save (Y) or exit without saving (N)

**bonus**:

To learn more about Nano, watch [this tutorial](https://www.youtube.com/watch?v=DLeATFgGM-A).

---

## How Can I Edit My zshell Settings?

**context**:

You may find you need to add a Python path or update oh-my-zshell settings.

**solution**:

- In a terminal do: `nano ~/.zshrc`.
- For changes to reflect in the terminal, either restart the terminal
  - Without closing/opening the terminal you can type `source ~/.zshrc` or, if using `oh-my-zshell`, `omz reload`

---

## What is My IP Address?

**context**:

Your IP address may need to be whitelisted to access data.

**solution**:

Go here: [https://httpbin.org/ip](https://httpbin.org/ip)

---

## How Can I Edit My Known SSH Hosts?

**context**:

You may need to remove or edit a known host from your `ssh/known_hosts` file. Most common encounter when a key changes.

```
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@    WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED!     @
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
IT IS POSSIBLE THAT SOMEONE IS DOING SOMETHING NASTY!
Someone could be eavesdropping on you right now (man-in-the-middle attack)!
```

**solution**:

In a terminal type `code ~/.ssh/known_hosts` or `nano ~/.ssh/known_hosts`

---


