# Bash Terminal

Common commands to run on the terminal

---

## How can I tell if a port is in use?

**context**:

You may be trying to spin up a service that uses a specified port, but get a generic message that "the specified port is already in use".

**solution**:

Open a terminal and run:

```
sudo lsof -P -i TCP -s TCP:LISTEN
```

Or, if you just want to target the exact port number:

```
sudo lsof -i:<port_number>
```

**resource**:
- [Find ports in use on macOS](https://www.micahsmith.com/blog/2019/09/find-ports-in-use-on-macos)

---

## How can terminate a port in use?

**context**:

See **How can I tell if a port is in use?** for context.

**solution**:

Copy the `PID` listed when calling `sudo lsof -i:<port_number>`

Next run:

```
kill -9 <PID>
```

---