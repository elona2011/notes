# git 需要配置用户名和邮箱

vscode 的 git 第一次使用要配置 git 全局变量，或者修改`~/.gitconfig`文件

```bash
git config --global user.name "yourname"
git config --global user.email youremail
```

# test config

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Launch Program",
      "program": "${file}",
      "args": ["--nolazy", "-r", "ts-node/register", "${relativeFile}"],
      "cwd": "${workspaceRoot}",
      "protocol": "inspector"
    },
    {
      "name": "Test",
      "type": "node",
      "request": "launch",
      "program": "${workspaceRoot}/node_modules/mocha/bin/_mocha",
      "args": ["--nolazy", "-r", "ts-node/register", "${relativeFile}"],
      "cwd": "${workspaceRoot}",
      "protocol": "inspector"
    },
    {
      "name": "Current TS File",
      "type": "node",
      "request": "launch",
      "args": ["${workspaceFolder}/src/main.ts"],
      // "args": ["${relativeFile}"],
      "runtimeArgs": ["--nolazy", "-r", "ts-node/register"],
      "cwd": "${workspaceRoot}",
      "protocol": "inspector"
    }
  ]
}
```

https://medium.com/@dupski/debug-typescript-in-vs-code-without-compiling-using-ts-node-9d1f4f9a94a

# plugin

## Beautify

识别 pcss，且可以 format

```json
"beautify.language": {
    "js": {
        "type": [
            "javascript",
            "json"
        ],
        "filename": [
            ".jshintrc",
            ".jsbeautify"
        ]
    },
    "css": {
        "type": [
            "css",
            "css"
        ],
        "ext": [
            "css",
            "pcss"
        ]
    },
    "html": [
        "htm",
        "html"
    ]
}
```

# setting

windows

```json
{
  // "http.proxy": "http://10.19.110.55:8080",
  "projectManager.openInNewWindow": false,
  "window.zoomLevel": 0,
  "editor.snippetSuggestions": "top",
  "html.format.indentInnerHtml": false,
  "git.confirmSync": false,
  "editor.wordWrap": "on",
  "vim.useSystemClipboard": true,
  "vim.handleKeys": {
    "<C-a>": false,
    "<C-d>": false,
    "<C-f>": false,
    "<C-x>": false,
    "<C-c>": false,
    "<C-v>": false,
    "<C-w>": false
  }
}
```

# key binding

```
Ctrl+← 向左单位性地移动光标，快速移动光标。
Ctrl+→ 向右单位性地移动光标，快速移动光标。
Ctrl+D 选中光标所占的文本，继续操作则会选中下一个相同的文本。
```

https://code.visualstudio.com/docs/customization/keybindings

# eslint

首先，安装 eslint 插件。然后，按 F1 输入 eslint，选择 Create .eslintrc.json 文件。

修改.eslintrc.json 文件规则：

```
{
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "node": true
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "sourceType": "module"
    },
    "rules": {
        "no-const-assign": "warn",
        "no-this-before-super": "warn",
        "no-undef": "warn",
        "no-unreachable": "warn",
        "no-unused-vars": "warn",
        "constructor-super": "warn",
        "valid-typeof": "warn",
        "semi": "warn"
    }
}
```

# decorator

How to remove experimentalDecorators warning in VSCode

https://ihatetomatoes.net/how-to-remove-experimentaldecorators-warning-in-vscode/

