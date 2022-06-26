1.

```
TypeError [ERR_UNKNOWN_FILE_EXTENSION]: Unknown file extension ".ts"
```

1- Add `"type": "module"` to package.json

2- Install ts-node

```
npm i -g ts-node
```

3- Go to tsconfig.json and add the following:

```json
{
    "compilerOptions": {
        "module": "ESNext",
        "moduleResolution": "Node",
    },
    "ts-node": {
        "esm": true
    }
}
```

4- Run

```
ts-node fileName.ts
```
