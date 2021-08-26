.gitattributes

```
* text=auto eol=lf
*.{cmd,[cC][mM][dD]} text eol=crlf
*.{bat,[bB][aA][tT]} text eol=crlf
```

https://code.visualstudio.com/docs/remote/troubleshooting#_resolving-git-line-ending-issues-in-containers-resulting-in-many-modified-files

devcontainer.json

```
"remoteEnv": {
	"LOCALWSF": "${localWorkspaceFolder}",
	"CONTAINERWSF": "${containerWorkspaceFolder}"
},
"workspaceMount": "type=bind,src=${localWorkspaceFolder},dst=/code",
"workspaceFolder": "/code",
```

https://github.com/microsoft/vscode-remote-release/issues/3942