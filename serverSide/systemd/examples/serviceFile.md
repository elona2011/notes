```
[Unit]
Description=feigua login
#Requires=After=mysql.service       # Requires the mysql service to run first

[Service]
ExecStart=/root/.nvm/versions/node/v14.13.1/bin/node /data1/goods/login.js
# Required on some systems
#WorkingDirectory=/opt/nodeserver
Restart=always
# Restart service after 10 seconds if node service crashes
RestartSec=10
# Output to syslog
StandardOutput=syslog
StandardError=syslog
SyslogIdentifier=feigua-login
#User=<alternate user>
#Group=<alternate group>
#Environment=NODE_ENV=production PORT=1337

[Install]
WantedBy=multi-user.target
```