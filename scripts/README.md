# Scripts

Common helper functions to solve everyday problems.

> ℹ️ These functions are written in TypeScript. If you would like plain JavaScript, run the `npm build` command to get the equivalent. The built JavaScript will be output to the `./scripts/dist` directory.

# Getting Started

In a terminal:

```
cd scripts
```

Install packages:

```
npm install
```

# Run All Tests

> ℹ️ Double-check you are in the `scripts` directory.

```
npm run tests
```

# Run a Single Text

> ℹ️ Double-check you are in the `scripts` directory.

```
npm run test -- <file-name>
```

**NOTE**: You do not have to include the file extension. Just the name of the test file.

For example:

```
npm run test -- truncate-text
```


# Build TypeScript to JavaScript

`npm run build`

The built TypeScript will be output in `./scripts/dist` directory.