# remote ssh debug

Cannot find runtime 'node' on PATH. Is 'node' installed?

```json
{
    // Use IntelliSense to learn about possible attributes.
    // Hover to view descriptions of existing attributes.
    // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
    "version": "0.2.0",
    "configurations": [
        {
            "type": "node",
            "request": "launch",
            "name": "Launch Program",
            "skipFiles": [
                "<node_internals>/**"
            ],
            "program": "${workspaceFolder}/test.js",
            "runtimeExecutable": "/root/.nvm/versions/node/v15.3.0/bin/node" //找到node路径，添加此行
        }
    ]
}
```