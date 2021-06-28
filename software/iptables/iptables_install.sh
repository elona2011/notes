#!/bin/bash

# Create an iptable chain PROXY
iptables -t nat -N PROXY

# Allow connection for the proxy itself
iptables -t nat -A PROXY -m owner --uid-owner $1 -j RETURN

# Allow connection to reserved networks
iptables -t nat -A PROXY -d 0.0.0.0/8 -j RETURN
iptables -t nat -A PROXY -d 10.0.0.0/8 -j RETURN
iptables -t nat -A PROXY -d 127.0.0.0/8 -j RETURN
iptables -t nat -A PROXY -d 169.254.0.0/16 -j RETURN
iptables -t nat -A PROXY -d 172.16.0.0/12 -j RETURN
iptables -t nat -A PROXY -d 192.168.0.0/16 -j RETURN
iptables -t nat -A PROXY -d 224.0.0.0/4 -j RETURN
iptables -t nat -A PROXY -d 240.0.0.0/4 -j RETURN 

# redirect the rest to the proxy port
iptables -t nat -A PROXY -p tcp -j REDIRECT --to-ports $2

# redirect tcp to PROXY 
iptables -t nat -A OUTPUT -p tcp -j PROXY