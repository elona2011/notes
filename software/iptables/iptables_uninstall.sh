#!/bin/bash

iptables -t nat -D OUTPUT -p tcp -j PROXY
iptables -t nat -F PROXY
iptables -t nat -X PROXY